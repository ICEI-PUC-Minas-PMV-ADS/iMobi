using IMobi.Imovel.Api.InputModels;
using IMobi.Imovel.Api.Models;
using IMobi.Imovel.Api.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IMobi.Imovel.Api.Controllers;
[Route("api/[controller]")]
[ApiController]
public class PropriedadeController : ControllerBase
{
    private readonly IPropriedadeRepository _repository;
    public PropriedadeController(IPropriedadeRepository repository)
    {
        _repository = repository ?? throw new ArgumentNullException(nameof(repository));
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Propriedade>>> GetPropriedades()
    {
        var propriedade = await _repository.GetPropriedades();
        return Ok(propriedade);
    }

    [Route("[action]/{finalidade}", Name = "GetPropriedadesByFinalidade")]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Propriedade>>> GetPropriedadesByFinalidade(string finalidade)
    {
        var propriedades = await _repository.GetPropriedadesByFinalidade(finalidade);
        return Ok(propriedades);
    }

    [Route("[action]/{userId}", Name = "GetByUserId")]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Propriedade>>> GetByUserId(string userId)
    {
        var propriedades = await _repository.GetByUserId(userId);
        return Ok(propriedades);
    }

    [HttpPost]
    public async Task<ActionResult<Propriedade>> CreatePropriedade([FromBody] PropriedadeInputModel propriedadeInputModel)
    {
        Propriedade propriedade = new();
        var entity = propriedade.InputModelToEntity(propriedadeInputModel);
        await _repository.CreatePropriedade(entity);
        return Ok(entity);
    }
}
