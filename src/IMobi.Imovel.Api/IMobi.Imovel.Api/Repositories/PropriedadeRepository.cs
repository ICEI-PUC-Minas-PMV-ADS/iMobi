using IMobi.Imovel.Api.Data;
using IMobi.Imovel.Api.Models;

namespace IMobi.Imovel.Api.Repositories;

public class PropriedadeRepository : IPropriedadeRepository
{
    private readonly IIMobiDbContext _context;
    public PropriedadeRepository(IIMobiDbContext context)
    {
        _context = context;
    }
    public async Task CreatePropriedade(Propriedade propriedade)
    {
        await _context.Propriedades.InsertOneAsync(propriedade);
    }
}
