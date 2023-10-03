using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace IMobiApi.Models;

public class Address
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public string Cidade { get; set; }
    public string Bairro { get; set; }
    public string Rua { get; set; }
    public int Numero { get; set; }
    public string Cep { get; set; }
}
