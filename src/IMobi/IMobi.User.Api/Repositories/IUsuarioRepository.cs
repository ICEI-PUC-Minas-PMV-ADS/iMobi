using IMobi.User.Api.Models;

namespace IMobi.User.Api.Repositories;

public interface IUsuarioRepository
{
    Task Create(Usuario usuario);
    Task<List<Usuario>> Read();
    Task<Usuario> FindById(string id);
    Task<Usuario> Authenticate(string email, string password);
    Task Update(string id, Usuario usuario);
    Task Delete(string id);
}