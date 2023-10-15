using IMobi.User.Api.Models;

namespace IMobi.User.Api.Services;

public interface IUsuarioService
{
    public Task<Usuario> Create(Usuario usuario);
}