using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace IMobiApi.Models;

public class Image
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    public string Url { get; set; }
    public int Order { get; set; }

    public string? PropertyId { get; set; }
}
