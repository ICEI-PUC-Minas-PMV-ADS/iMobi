using Microsoft.AspNetCore.Mvc;
using IMobi.User.Api.Repositories;
using IMobi.User.Api.Services;
using IMobi.User.Api.Dtos;


namespace IMobi.User.Api.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUsuarioRepository _usuarioRepository;
        private readonly TokenService _tokenService;

        public AuthController(IUsuarioRepository usuarioRepository, TokenService tokenService)
        {
            _usuarioRepository = usuarioRepository;
            _tokenService = tokenService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            try
            {
                var usuario = await _usuarioRepository.Authenticate(loginDto.Email, loginDto.Password);

                if (usuario == null)
                {
                    return Unauthorized("Credenciais inválidas");
                }

                var token = _tokenService.Generate(usuario);

                return Ok(new { Token = token, usuario.Nome, usuario.Email, usuario.Creci, usuario.Role });
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro durante a autenticação: {ex.Message}");
            }
        }
    }
}
