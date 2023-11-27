using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace IMobi.Images.Api.Models;

public class Image
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; } = string.Empty;

    [BsonRepresentation(BsonType.ObjectId)]
    public string PropriedadeId { get; set; } = string.Empty;

    public string PropriedadeImagem { get; set; } = string.Empty;

    public IFormFile? ArquivoImagem { get; set; }
    public int Ordem { get; set; }
}
