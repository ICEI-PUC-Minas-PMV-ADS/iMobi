using IMobi.Imovel.Api.Models;
using static IMobi.Imovel.Api.Models.Propriedade;

namespace IMobi.Imovel.Api.InputModels;

public class PropriedadeInputModel
{
    public string Id { get; set; }
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
    public Endereco Endereco { get; set; }
}
