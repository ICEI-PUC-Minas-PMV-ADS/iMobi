using IMobi.Imovel.Api.InputModels;
using IMobi.Imovel.Api.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;

[TestClass]
public class PropriedadeInputModelTests
{
    [TestMethod]
    public void PropriedadeInputModel_PropertiesAreSetCorrectly()
    {
        
        var endereco = new Endereco
        {
            
        };

        var propriedadeInputModel = new PropriedadeInputModel
        {
            Id = "123",
            UserId = "user123",
            Finalidade = FinalidadeEnum.Venda,
            Status = StatusEnum.Disponivel,
            AreaPrivativa = 100,
            AreaTotal = 150,
            Quartos = 3,
            Suites = 2,
            Garagem = GaragemEnum.UmaVaga,
            Detalhes = "Detalhes da propriedade",
            Preco = 300000.00m,
            ValorCondominio = 500.00m,
            ValorAluguel = 2000.00m,
            Endereco = endereco
        };

        Assert.AreEqual("123", propriedadeInputModel.Id);
        Assert.AreEqual("user123", propriedadeInputModel.UserId);
        Assert.AreEqual(FinalidadeEnum.Venda, propriedadeInputModel.Finalidade);
        Assert.AreEqual(StatusEnum.Disponivel, propriedadeInputModel.Status);
        Assert.AreEqual(100, propriedadeInputModel.AreaPrivativa);
        Assert.AreEqual(150, propriedadeInputModel.AreaTotal);
        Assert.AreEqual(3, propriedadeInputModel.Quartos);
        Assert.AreEqual(2, propriedadeInputModel.Suites);
        Assert.AreEqual(GaragemEnum.UmaVaga, propriedadeInputModel.Garagem);
        Assert.AreEqual("Detalhes da propriedade", propriedadeInputModel.Detalhes);
        Assert.AreEqual(300000.00m, propriedadeInputModel.Preco);
        Assert.AreEqual(500.00m, propriedadeInputModel.ValorCondominio);
        Assert.AreEqual(2000.00m, propriedadeInputModel.ValorAluguel);
        Assert.AreSame(endereco, propriedadeInputModel.Endereco);
    }
}
