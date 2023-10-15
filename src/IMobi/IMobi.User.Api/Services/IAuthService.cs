using IMobi.User.Api.Models;

namespace IMobi.User.Api.Services;

public interface IAuthService
{
    public Task<Usuario?> Authenticate(string email, string password);
}