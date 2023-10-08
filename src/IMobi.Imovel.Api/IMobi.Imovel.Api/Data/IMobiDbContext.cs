using IMobi.Imovel.Api.Models;
using MongoDB.Driver;

namespace IMobi.Imovel.Api.Data;

public class IMobiDbContext : IIMobiDbContext
{
    public IMobiDbContext(IConfiguration configuration)
    {
        var client = new MongoClient(configuration.GetValue<string>("DatabaseSettings:ConnectionString"));

        var database = client.GetDatabase(configuration.GetValue<string>("DatabaseSettings:DatabaseName"));

        Propriedades = database.GetCollection<Propriedade>(configuration.GetValue<string>("DatabaseSettings:CollectionName"));
    }

    public IMongoCollection<Propriedade> Propriedades {get; }
}
