using IMobi.Imovel.Api.Models;
using MongoDB.Driver;

namespace IMobi.Imovel.Api.Data;

public interface IIMobiDbContext
{
    IMongoCollection<Propriedade> Propriedades { get; }
}
