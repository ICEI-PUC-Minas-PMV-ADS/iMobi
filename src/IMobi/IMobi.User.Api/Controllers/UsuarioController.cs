using IMobi.User.Api.Dtos;
using IMobi.User.Api.Models;
using IMobi.User.Api.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

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
