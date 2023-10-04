using MongoDB.Driver;
using IMobiApi.Models;
using Microsoft.Extensions.Options;

namespace IMobiApi.Repositories
{
    public class PropertyRepository
    {
        private readonly IMongoCollection<Property> _propertyCollection;
        //  private readonly IMongoCollection<AddressRepository> _addressesCollection;

        public PropertyRepository(IMongoClient mongoClient, IOptions<MyMongoDbSettings> settings)
        {
            var database = mongoClient.GetDatabase(settings.Value.DatabaseName);
            _propertyCollection = database.GetCollection<Property>("property");
        }

        public async Task<List<Property>> FindAll()
        {
            return await _propertyCollection.Find(_ => true).ToListAsync();
        }

        public async Task CreateProperty(Property property)
        {
            await _propertyCollection.InsertOneAsync(property);
        }
    }
}
