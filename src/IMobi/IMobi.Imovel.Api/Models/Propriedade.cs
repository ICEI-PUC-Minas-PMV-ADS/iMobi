using IMobi.Imovel.Api.InputModels;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace IMobi.Imovel.Api.Models;

public class Propriedade
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    [BsonRepresentation(BsonType.ObjectId)]
    public string UserId { get; set; }
    public FinalidadeEnum Finalidade { get; set; }
    public StatusEnum Status { get; set; }
    public int AreaPrivativa { get; set; }
    public int AreaTotal { get; set; }
    public int Quartos { get; set; }
    public int Suites { get; set; }
    public GaragemEnum Garagem { get; set; }
    public string Detalhes { get; set; }
    public decimal Preco { get; set; }
    public decimal ValorCondominio { get; set; }
    public decimal ValorAluguel { get; set; }
    public DateTime? CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }

    //Relacionamentos
    public Endereco Endereco { get; set; }

    public Propriedade InputModelToEntity(PropriedadeInputModel model)
    {
        var entity = new Propriedade()
        {
            UserId = model.UserId,
            Finalidade = model.Finalidade,
            Status = model.Status,
            AreaPrivativa = model.AreaPrivativa,
            AreaTotal = model.AreaTotal,
            Quartos = model.Quartos,
            Suites = model.Suites,
            Garagem = model.Garagem,
            Detalhes = model.Detalhes,
            Preco = model.Preco,
            ValorCondominio = model.ValorCondominio,
            ValorAluguel = model.ValorAluguel,
            Endereco = new Endereco()
            {
                Estado = model.Endereco.Estado,
                Cidade = model.Endereco.Cidade,
                Bairro = model.Endereco.Bairro,
                Rua = model.Endereco.Rua,
                Numero = model.Endereco.Numero,
                CEP = model.Endereco.CEP
            }
        };

        return entity;
    }

    public enum FinalidadeEnum
    {
        Nd,
        Venda,
        Aluguel
    }

    public enum StatusEnum
    {
        Lancamento,
        Pronto,
        EmConstrucao
    }

    public enum GaragemEnum
    {
        Sim,
        Nao
    }
}