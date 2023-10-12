using IMobi.User.Api.Data;
using IMobi.User.Api.Models;


namespace IMobi.User.Api.Repositories;

public class UsuarioRepository : IUsuarioRepository
{
    private readonly IIMobiDbContext _context;

    public UsuarioRepository(IIMobiDbContext context)
    {
        _context = context;
    }

    public async Task Create(Usuario usuario)
    {
        await _context.Usuario.InsertOneAsync(usuario);
    }
}