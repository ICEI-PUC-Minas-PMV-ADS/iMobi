using IMobi.User.Api.Dtos;
using IMobi.User.Api.Models;
using IMobi.User.Api.Repositories;

namespace IMobi.User.Api.Services
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IUsuarioRepository _usuarioRepository;

        public UsuarioService(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        public async Task<Usuario> Create(Usuario usuario)
        {
            var emailIsAlreadyInUse = await _usuarioRepository.FindByEmail(usuario.Email);
            var cpfCnpjIsAlreadyInUse = await _usuarioRepository.FindByCpfCnpj(usuario.CpfCnpj);

            if (emailIsAlreadyInUse != null)
            {
                throw new Exception("Email já está em uso.");
            }

            if (cpfCnpjIsAlreadyInUse != null)
            {
                throw new Exception("Cpf/Cnpj já está em uso.");
            }

            usuario.Password = BCrypt.Net.BCrypt.HashPassword(usuario.Password);

            await _usuarioRepository.Create(usuario);

            return usuario;
        }

        public async Task<Usuario> FindByEmail(string usuario)
        {

            var user = await _usuarioRepository.FindByEmail(usuario);

            if (user == null)
            {
                throw new Exception("Usuário não encontrado.");
            }

            return user;
        }



        public async Task<bool> UpdatePassword(string email, string newPassword)
        {
            var usuario = await _usuarioRepository.FindByEmail(email);

            if (usuario != null)
            {
                // Atualiza apenas a senha
                usuario.Password = BCrypt.Net.BCrypt.HashPassword(newPassword);

                await _usuarioRepository.UpdateByEmail(email, usuario);

                return true;
            }

            return false;
        }
        

        public async Task<UsuarioDto> FindById(string id)
        {
            var usuario = await _usuarioRepository.FindById(id);

            if (usuario == null)
            {
                throw new Exception("Usuário não encontrado");
            }

            return new UsuarioDto
            {
                Id = usuario.Id,
                Nome = usuario.Nome,
                Email = usuario.Email,
                CpfCnpj = usuario.CpfCnpj
            };
        }
    }
}
