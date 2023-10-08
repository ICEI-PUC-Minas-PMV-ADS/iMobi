using IMobi.Imovel.Api.Data;
using IMobi.Imovel.Api.Models;
using MongoDB.Driver;

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

    public async Task<IEnumerable<Propriedade>> GetPropriedades()
    {
        return await _context.Propriedades.Find(p => true).ToListAsync();
    }
}
