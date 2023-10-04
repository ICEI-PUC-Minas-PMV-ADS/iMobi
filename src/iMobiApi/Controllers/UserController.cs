using System.Net;
using iMobiApi.Dtos;
using Microsoft.AspNetCore.Mvc;
using iMobiApi.Services;

namespace iMobiApi.Controllers;

[ApiController]
[Route("api/v1/user")]
public class UserController : ControllerBase
{
    private readonly UserService _userService;

    public UserController(UserService userService)
    {
        _userService = userService;
    }

    [HttpPost]
    [Route("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequest request)
    {
        var result = await _userService.Register(request);

        return result.Success ? Ok(result) : BadRequest(result.Message);
    }
}
