using IMobi.User.Api.Dtos;
using IMobi.User.Api.Models;
using IMobi.User.Api.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace IMobi.User.Api.Controllers
{
    [Route("api/usuarios")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioRepository _usuarioRepository;

        public UsuarioController(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] UsuarioDto usuarioDto)
        {
            try
            {
                var usuario = new Usuario
                {
                    Email = usuarioDto.Email,
                    Password = usuarioDto.Password
                };

                await _usuarioRepository.Create(usuario);

                return Ok("Usuário criado com sucesso");
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro ao criar o usuário: {ex.Message}");
            }
        }
    }
}
