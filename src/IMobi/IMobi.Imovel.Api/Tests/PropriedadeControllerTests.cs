using IMobi.Imovel.Api.Controllers;
using IMobi.Imovel.Api.InputModels;
using IMobi.Imovel.Api.Models;
using IMobi.Imovel.Api.Repositories;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;

namespace IMobi.Imovel.Api.Controller.Tests
{
    public class PropriedadeControllerTests
    {
        [Fact]
        public async Task GetPropriedades_ReturnsOkResult()
        {
            // Arrange
            var repositoryMock = new Mock<IPropriedadeRepository>();
            var controller = new PropriedadeController(repositoryMock.Object);

            // Act
            var result = await controller.GetPropriedades();

            // Assert
            Assert.IsType<OkObjectResult>(result.Result);
        }

        [Fact]
        public async Task GetPropriedadesByFinalidade_ReturnsOkResult()
        {
            // Arrange
            var repositoryMock = new Mock<IPropriedadeRepository>();
            var controller = new PropriedadeController(repositoryMock.Object);

            // Act
            var result = await controller.GetPropriedadesByFinalidade("Venda");

            // Assert
            Assert.IsType<OkObjectResult>(result.Result);
        }

        [Fact]
        public async Task GetByUserId_ReturnsOkResult()
        {
            // Arrange
            var repositoryMock = new Mock<IPropriedadeRepository>();
            var controller = new PropriedadeController(repositoryMock.Object);

            // Act
            var result = await controller.GetByUserId("user123");

            // Assert
            Assert.IsType<OkObjectResult>(result.Result);
        }

        [Fact]
        public async Task CreatePropriedade_ReturnsCreatedAtActionResult()
        {
            // Arrange
            var repositoryMock = new Mock<IPropriedadeRepository>();
            var controller = new PropriedadeController(repositoryMock.Object);

            var inputModel = new PropriedadeInputModel
            {
                Id = "1111",
                UserId = "user123",
                Finalidade = Propriedade.FinalidadeEnum.Venda,
                Status = Propriedade.StatusEnum.Pronto,
                AreaPrivativa = 100,
                AreaTotal = 150,
                Quartos = 3,
                Suites = 1,
                Garagem = Propriedade.GaragemEnum.Sim,
                Detalhes = "Propriedade Atualizada",
                Preco = 270000,
                ValorCondominio = 600,
                ValorAluguel = 2200
            };

            // Act
            var result = await controller.CreatePropriedade(inputModel);

            // Assert
            Assert.IsType<CreatedAtActionResult>(result.Result);
        }

        [Fact]
        public async Task UpdatePropriedade_ReturnsOkResult()
        {
            // Arrange
            var repositoryMock = new Mock<IPropriedadeRepository>();
            var controller = new PropriedadeController(repositoryMock.Object);

            var inputModel = new PropriedadeInputModel
            {
                Id = "1111",
                UserId = "user123",
                Finalidade = Propriedade.FinalidadeEnum.Venda,
                Status = Propriedade.StatusEnum.Pronto,
                AreaPrivativa = 100,
                AreaTotal = 150,
                Quartos = 3,
                Suites = 1,
                Garagem = Propriedade.GaragemEnum.Sim,
                Detalhes = "Propriedade Atualizada",
                Preco = 470000,
                ValorCondominio = 400,
                ValorAluguel = 2600
            };

            // Act
            var result = await controller.UpdatePropriedade(inputModel);

            // Assert
            Assert.IsType<OkObjectResult>(result.Result);
        }
    }
}