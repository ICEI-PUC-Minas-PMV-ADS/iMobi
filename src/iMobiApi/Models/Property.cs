using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using IMobiApi.Enums;
namespace IMobiApi.Models;

public class Property
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public ApplicationUser ApplicationUser { get; set; }
    public Category Category { get; set; }
    public Finalidade Finalidade { get; set; }
    public Status Status { get; set; }
    public double AreaPrivativa { get; set; }
    public double AreaTotal { get; set; }
    public int Quartos { get; set; }
    public int Suites { get; set; }
    public int Garagem { get; set; }
    public string Detalhes { get; set; }
    public double Preco { get; set; }
    public double Condominio { get; set; }
    public double Aluguel { get; set; }
    public ICollection<Galery> Galery { get; set; }
    public Address Address { get; set; }
}