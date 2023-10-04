using System.Net;
using iMobiApi.Dtos;
using Microsoft.AspNetCore.Mvc;
using iMobiApi.Services;
using IMobiApi.Repositories;
using IMobiApi.Models;
using IMobiApi.Helpers;

namespace iMobiApi.Controllers;

[ApiController]
[Route("api/v1/property")]
public class PropertyController : ControllerBase
{
    public readonly PropertyRepository _propertyRepository;
    private readonly AddressRepository _addressRepository;

    public PropertyController(PropertyRepository propertyRepository, AddressRepository addressRepository)
    {
        _propertyRepository = propertyRepository;
        _addressRepository = addressRepository;
    }

    [HttpGet]
    [Route("get")]
    public async Task<IActionResult> GetAll()
    {
        List<Property> property = await _propertyRepository.FindAll();

        return Ok(property);
    }

    [HttpPost]
    [Route("create")]
    public async Task<IActionResult> Create([FromBody] Property request)
    {
        // Crie um novo objeto Address
        var address = new Address
        {
            Cidade = request.Address.Cidade,
            Bairro = request.Address.Bairro,
            Rua = request.Address.Rua,
            Numero = request.Address.Numero,
            Cep = request.Address.Cep
        };

        // Salve o endereço no banco de dados
        await _addressRepository.CreateAddress(address);

        // Associe o ID do endereço à propriedade
        request.Address = address;

        // Salve a propriedade no banco de dados
        await _propertyRepository.CreateProperty(request);

        return Ok();
    }






}
