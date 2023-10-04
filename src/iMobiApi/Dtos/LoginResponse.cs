using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace iMobiApi.Dtos;

public class LoginResponse
{
    public bool Success { get; set; }
    public string AccessToken { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;

    [BsonRepresentation(BsonType.ObjectId)]
    public string UserId { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
}