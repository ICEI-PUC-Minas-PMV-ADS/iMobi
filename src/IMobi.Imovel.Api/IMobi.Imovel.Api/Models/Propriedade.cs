namespace IMobi.Imovel.Api.Models;

public class Propriedade
{
    public int Id { get; set; }
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
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    //Relacionamentos
    public Endereco Endereco { get; set; }
}

public enum FinalidadeEnum
{
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
