using AspNetCore.Identity.MongoDbCore.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDbGenericRepository.Attributes;

namespace IMobiApi.Models;

[CollectionName("users")]
public class ApplicationUser : MongoIdentityUser<Guid>
{
    public string Username { get; set; } = string.Empty;
}