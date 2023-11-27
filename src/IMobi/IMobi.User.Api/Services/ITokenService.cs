using IMobi.User.Api.Models;

namespace IMobi.User.Api.Services;

public interface ITokenService
{
    public string Generate(Usuario usuario);
}