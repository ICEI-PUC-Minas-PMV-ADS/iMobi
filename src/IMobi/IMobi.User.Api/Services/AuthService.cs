using IMobi.User.Api.Models;
using IMobi.User.Api.Repositories;
using BCrypt.Net;

namespace IMobi.User.Api.Services
{
    public class AuthService
    {
        private readonly IUsuarioRepository _usuarioRepository;

        public AuthService(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        public async Task<Usuario?> Authenticate(string email, string password)
        {

            var existingUsuario = await _usuarioRepository.FindByEmail(email);

            if (existingUsuario == null)
            {
                throw new Exception("Usuário não encontrado.");
            }

            bool isPasswordValid = BCrypt.Net.BCrypt.Verify(password, existingUsuario.Password);

            if (isPasswordValid)
            {
                return existingUsuario;
            }

            return null;
        }
    }
}
