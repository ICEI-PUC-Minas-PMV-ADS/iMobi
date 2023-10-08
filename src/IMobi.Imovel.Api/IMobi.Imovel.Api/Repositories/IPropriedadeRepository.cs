using IMobi.Imovel.Api.Models;

namespace IMobi.Imovel.Api.Repositories;

public interface IPropriedadeRepository
{
    Task CreatePropriedade(Propriedade propriedade);
    Task<IEnumerable<Propriedade>> GetPropriedades();
}
