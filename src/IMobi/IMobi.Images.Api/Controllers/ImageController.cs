using IMobi.Images.Api.Dtos;
using IMobi.Images.Api.Models;
using IMobi.Images.Api.Repositories;
using IMobi.User.Api.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace IMobi.Images.Api.Controllers;

//652835f8bf11193f53d6f30b

[Route("api/[controller]")]
[ApiController]

public class ImageController : ControllerBase
{
    private IWebHostEnvironment _environment;
    private readonly IFileRepository _fileRepository;
    private readonly IIMobiDbContext _context;

    public ImageController(IFileRepository fileRepository, IIMobiDbContext context, IWebHostEnvironment environment)
    {
        _fileRepository = fileRepository;
        _context = context;
        _environment = environment;
    }

    [Authorize]
    [HttpPost("add")]
    public async Task<IActionResult?> Add([FromForm] ImageDto imageDto)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Por favor, passe um arquivo válido");
            }

            if (imageDto.ArquivoImagem != null)
            {
                var fileResult = _fileRepository.SaveImage(imageDto.ArquivoImagem);

                if (fileResult.Item1 == 1)
                {
                    string baseUrl = "http://localhost:5002/recursos"; // Ajuste isso para a base da URL da sua aplicação
                    string imageRelativePath = fileResult.Item2; // Nome do arquivo
                    string imageUrl = $"{baseUrl}/{imageRelativePath}";

                    // Atribua a URL completa a PropriedadeImagem
                    imageDto.PropriedadeImagem = imageUrl;
                }

                var image = new Image
                {
                    PropriedadeId = imageDto.PropriedadeId,
                    //  ArquivoImagem = imageDto.ArquivoImagem,
                    PropriedadeImagem = imageDto.PropriedadeImagem,
                    Ordem = imageDto.Ordem,
                };

                await _context.Imagens.InsertOneAsync(image);
                return Ok($"Imagem salva com sucesso: {imageDto.PropriedadeImagem}");
            }

            return null;
        }
        catch (Exception ex)
        {
            return BadRequest($"Erro ao salvar os dados da imagem no Banco de Dados: {ex.Message}");
        }
    }

    [HttpGet("getByPropriedadeId/{propriedadeId}")]
    public async Task<IActionResult?> GetImagesByPropriedadeId(string propriedadeId)
    {
        try
        {
            var image = await _context.Imagens.Find(u => u.PropriedadeId == propriedadeId).ToListAsync();

            if (image != null)
            {
                return Ok(image);
            }
            else
            {
                return NotFound();
            }
        }
        catch (Exception ex)
        {
            return BadRequest($"Erro ao recuperar a imagem: {ex.Message}");
        }
    }

}