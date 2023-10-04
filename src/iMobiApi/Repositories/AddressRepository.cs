using MongoDB.Driver;
using IMobiApi.Models;
using Microsoft.Extensions.Options;

namespace IMobiApi.Repositories
{
    public class AddressRepository
    {
        private readonly IMongoCollection<Address> _addressCollection;

        public AddressRepository(IMongoClient mongoClient, IOptions<MyMongoDbSettings> settings)
        {
            var database = mongoClient.GetDatabase(settings.Value.DatabaseName);
            _addressCollection = database.GetCollection<Address>("address");
        }

        public async Task<List<Address>> FindAll()
        {
            return await _addressCollection.Find(_ => true).ToListAsync();
        }

        public async Task CreateAddress(Address address)
        {
            await _addressCollection.InsertOneAsync(address);
        }
    }
}
