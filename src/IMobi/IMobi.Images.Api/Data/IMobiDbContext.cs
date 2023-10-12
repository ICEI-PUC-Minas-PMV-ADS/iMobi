using System.Net.Mime;
using IMobi.Images.Api.Models;
using MongoDB.Driver;

namespace IMobi.User.Api.Data
{
    public class IMobiDbContext
    {
        public IMobiDbContext(IConfiguration configuration)
        {
            var client = new MongoClient(configuration.GetValue<string>("DatabaseSettings:ConnectionString"));

            var database = client.GetDatabase(configuration.GetValue<string>("DatabaseSettings:DatabaseName"));

            Imagens = database.GetCollection<Image>(configuration.GetValue<string>("DatabaseSettings:CollectionName"));
        }

        public IMongoCollection<Image> Imagens { get; }

        public IMongoCollection<Image> Image => Imagens;
    }
}
