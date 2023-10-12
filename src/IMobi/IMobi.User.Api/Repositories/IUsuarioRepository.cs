using IMobi.User.Api.Models;

namespace IMobi.User.Api.Repositories;

public interface IUsuarioRepository
{
    Task Create(Usuario usuario);
}