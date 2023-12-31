using IMobi.User.Api.Models;

namespace IMobi.User.Api.Repositories;

public interface IUsuarioRepository
{
    Task Create(Usuario usuario);
    Task<List<Usuario>> Read();
    Task<Usuario> FindById(string id);
    Task<Usuario> FindByEmail(string email);
    Task<Usuario> FindByCpfCnpj(string cpfcnpj);
    Task Update(string id, Usuario usuario);
    Task UpdateByEmail(string email, Usuario usuario);
    Task Delete(string id);
}