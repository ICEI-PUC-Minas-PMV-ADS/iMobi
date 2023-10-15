using IMobi.Imovel.Api.Models;

namespace IMobi.Imovel.Api.Repositories;

public interface IPropriedadeRepository
{
    Task CreatePropriedade(Propriedade propriedade);
    Task<IEnumerable<Propriedade>> GetPropriedades();
    Task<IEnumerable<Propriedade>> GetPropriedadesByFinalidade(string finalidade);
    Task<IEnumerable<Propriedade>> GetByUserId(string userId);
    Task UpdatePropriedade(Propriedade propriedade);
}
