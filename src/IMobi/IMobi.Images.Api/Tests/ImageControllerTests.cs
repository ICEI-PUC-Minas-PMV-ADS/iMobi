using IMobi.Images.Api.Controllers;
using IMobi.Images.Api.Dtos;
using IMobi.Images.Api.Models;
using IMobi.Images.Api.Repositories;
using IMobi.User.Api.Data;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;

namespace IMobi.Imagens.Api.Controller.Tests
{
    public class ImageControllerTests
    {
        [Fact]
        public async Task Add_ValidImage_ReturnsOkResult()
        {
            // Arrange
            var imageDto = new ImageDto
            {
                // Preencha os campos necessários em imageDto
            };

            var fileRepositoryMock = new Mock<IFileRepository>();
            fileRepositoryMock.Setup(repo => repo.SaveImage(It.IsAny<IFormFile>()))
                             .Returns((1, "imageRelativePath")); // Simule a resposta do repositório de arquivos

            var contextMock = new Mock<IIMobiDbContext>();
            contextMock.Setup(db => db.Imagens.InsertOneAsync(It.IsAny<Image>()))
                       .Returns(Task.CompletedTask); // Simule a inserção no banco de dados

            var environmentMock = new Mock<IWebHostEnvironment>();

            var controller = new ImageController(fileRepositoryMock.Object, contextMock.Object, environmentMock.Object);

            // Act
            var result = await controller.Add(imageDto);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var message = Assert.IsType<string>(okResult.Value);
            Assert.Equal("Imagem salva com sucesso: http://localhost:5002/recursos/imageRelativePath", message);
        }
    }
}
