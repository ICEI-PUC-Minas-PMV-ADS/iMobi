using IMobi.User.Api.Models;
using IMobi.User.Api.Repositories;

namespace IMobi.User.Api.Services
{
    public class UsuarioService
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
    }
}
