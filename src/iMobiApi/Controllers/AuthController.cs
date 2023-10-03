using System.Net;
using iMobiApi.Dtos;
using Microsoft.AspNetCore.Mvc;
using iMobiApi.Services;

namespace iMobiApi.Controllers;

[ApiController]
[Route("api/v1/auth")]
public class AuthController : ControllerBase
{
    private readonly UserService _userService;

    public AuthController(UserService userService)
    {
        _userService = userService;
    }

    [HttpPost]
    [Route("login")]
    [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(LoginResponse))]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        var result = await _userService.Login(request);

        return result.Success ? Ok(result) : BadRequest(result.Message);
    }
}
