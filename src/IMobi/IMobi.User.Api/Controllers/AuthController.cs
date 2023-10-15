using Microsoft.AspNetCore.Mvc;
using IMobi.User.Api.Services;
using IMobi.User.Api.Dtos;


namespace IMobi.User.Api.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;
        private readonly TokenService _tokenService;

        public AuthController(AuthService authService, TokenService tokenService)
        {
            _authService = authService;
            _tokenService = tokenService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            try
            {
                var usuario = await _authService.Authenticate(loginDto.Email, loginDto.Password);

                if (usuario == null)
                {
                    return Unauthorized("Credenciais inválidas");
                }

                var token = _tokenService.Generate(usuario);

                return Ok(new { token, usuario.Id, usuario.Nome, usuario.Email, usuario.Creci, usuario.Role });
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro durante a autenticação: {ex.Message}");
            }
        }
    }
}
