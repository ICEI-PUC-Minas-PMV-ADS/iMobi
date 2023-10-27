using IMobi.User.Api.Dtos;
using IMobi.User.Api.Models;
using IMobi.User.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace IMobi.User.Api.Controllers
{
    [Route("api/usuario")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly UsuarioService _usuarioSrevice;

        public UsuarioController(UsuarioService usuarioSrevice)
        {
            _usuarioSrevice = usuarioSrevice;
        }

        [HttpPost("create")]
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

        [HttpGet("findById/{id}")]
        public async Task<IActionResult> FindById(string id)
        {
            try
            {
                var usuario = await _usuarioSrevice.FindById(id);

                if (usuario != null)
                {
                    return Ok(usuario);
                }
                else
                {
                    return NotFound("Usuário não encontrado");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro ao buscar o usuário: {ex.Message}");
            }
        }
    }
}
