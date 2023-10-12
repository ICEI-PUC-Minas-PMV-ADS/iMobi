using IMobi.User.Api.Dtos;
using IMobi.User.Api.Models;
using IMobi.User.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace IMobi.User.Api.Controllers
{
    [Route("api/usuarios")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly UsuarioService _usuarioSrevice;

        public UsuarioController(UsuarioService usuarioSrevice)
        {
            _usuarioSrevice = usuarioSrevice;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateUsuarioDto usuarioDto)
        {
            try
            {
                var usuario = new Usuario
                {
                    Nome = usuarioDto.Nome,
                    Email = usuarioDto.Email,
                    Password = usuarioDto.Password,
                    CpfCnpj = usuarioDto.CpfCnpj,
                    Creci = usuarioDto.Creci,
                    Role = usuarioDto.Role,
                };

                await _usuarioSrevice.Create(usuario);

                return Ok("Usuário criado com sucesso");
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro ao criar o usuário: {ex.Message}");
            }
        }
    }
}
