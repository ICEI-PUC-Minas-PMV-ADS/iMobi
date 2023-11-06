using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace IMobi.User.Api.Models;
public class Usuario
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; } = string.Empty;

    [BsonElement("nome")]
    public string Nome { get; set; } = string.Empty;

    [BsonElement("email")]
    public string Email { get; set; } = string.Empty;

    [BsonElement("password")]
    public string Password { get; set; } = string.Empty;

    [BsonElement("cpfcnpj")]
    public string CpfCnpj { get; set; } = string.Empty;

    [BsonElement("creci")]
    public string Creci { get; set; } = string.Empty;

    [BsonElement("role")]
    public required string[] Role { get; set; }


}