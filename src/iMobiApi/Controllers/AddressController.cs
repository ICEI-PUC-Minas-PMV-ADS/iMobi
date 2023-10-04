using System.Net;
using iMobiApi.Dtos;
using Microsoft.AspNetCore.Mvc;
using iMobiApi.Services;
using IMobiApi.Repositories;
using IMobiApi.Models;

namespace iMobiApi.Controllers;

[ApiController]
[Route("api/v1/address")]
public class AddressController : ControllerBase
{
    public readonly AddressRepository _addressRepository;

    public AddressController(AddressRepository addressRepository)
    {
        _addressRepository = addressRepository;
    }

    [HttpGet]
    [Route("get")]
    public async Task<IActionResult> GetAll()
    {
        List<Address> addresses = await _addressRepository.FindAll();

        return Ok(addresses);
    }

    // [HttpPost]
    // [Route("create")]
    // public async Task<IActionResult> Create([FromBody] Address request)
    // {
    //     await _addressRepository.CreateAddress(request);

    //     return Ok();
    // }
}
