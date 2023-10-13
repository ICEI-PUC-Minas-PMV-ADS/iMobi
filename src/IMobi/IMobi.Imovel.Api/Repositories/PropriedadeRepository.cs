using IMobi.Imovel.Api.Data;
using IMobi.Imovel.Api.Models;
using MongoDB.Driver;
using static IMobi.Imovel.Api.Models.Propriedade;

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

    public async Task<IEnumerable<Propriedade>> GetPropriedadesByFinalidade(string finalidade)
    {
        FinalidadeEnum finalidadeType = new();
        if (finalidade == FinalidadeEnum.Venda.ToString())
            finalidadeType = FinalidadeEnum.Venda;
        else if (finalidade == FinalidadeEnum.Aluguel.ToString())
            finalidadeType = FinalidadeEnum.Aluguel;
        FilterDefinition<Propriedade> filter = Builders<Propriedade>.Filter
            .Eq<Enum>(p => p.Finalidade, finalidadeType);

        return await _context.Propriedades.Find(filter).ToListAsync();

    }

    public async Task<IEnumerable<Propriedade>> GetPropriedades()
    {
        return await _context.Propriedades.Find(p => true).ToListAsync();
    }

    public async Task<IEnumerable<Propriedade>> GetByUserId(string userId)
    {
        var filter = Builders<Propriedade>.Filter.Eq(p => p.UserId, userId);
        return await _context.Propriedades.Find(filter).ToListAsync();
    }

    public async Task UpdatePropriedade(Propriedade propriedade)
    {
        await _context.Propriedades.ReplaceOneAsync(filter: g => g.Id == propriedade.Id, replacement: propriedade);
    }
}
