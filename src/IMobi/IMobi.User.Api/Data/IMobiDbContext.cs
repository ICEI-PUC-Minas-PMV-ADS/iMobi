using IMobi.User.Api.Models;
using MongoDB.Driver;

namespace IMobi.User.Api.Data
{
    public class IMobiDbContext : IIMobiDbContext
    {
        public IMobiDbContext(IConfiguration configuration)
        {
            var client = new MongoClient(configuration.GetValue<string>("DatabaseSettings:ConnectionString"));

            var database = client.GetDatabase(configuration.GetValue<string>("DatabaseSettings:DatabaseName"));

            Usuarios = database.GetCollection<Usuario>(configuration.GetValue<string>("DatabaseSettings:CollectionName"));
        }

        public IMongoCollection<Usuario> Usuarios { get; }

        public IMongoCollection<Usuario> Usuario => Usuarios;
    }
}
