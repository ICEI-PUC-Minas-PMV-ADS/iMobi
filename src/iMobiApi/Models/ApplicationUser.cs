using AspNetCore.Identity.MongoDbCore.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDbGenericRepository.Attributes;

namespace IMobiApi.Models;

[BsonIgnoreExtraElements]
[CollectionName("users")]
public class ApplicationUser : MongoIdentityUser<ObjectId>
{
    public string Username { get; set; }
}