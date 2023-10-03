using AspNetCore.Identity.MongoDbCore.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDbGenericRepository.Attributes;

namespace IMobiApi.Models;

[CollectionName("roles")]
public class ApplicationRole : MongoIdentityRole<Guid>
{

}