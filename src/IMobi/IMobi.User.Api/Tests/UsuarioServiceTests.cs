using Xunit;
using Moq;
using IMobi.User.Api.Models;
using IMobi.User.Api.Services;
using IMobi.User.Api.Repositories;

namespace IMobi.User.Api.Tests;

public class UsuarioServiceTests
{
    [Fact]
    public async Task Create_WhenEmailIsNotInUse_ShouldCreateUser()
    {
        // Arrange
        var usuarioRepositoryMock = new Mock<IUsuarioRepository>();

        usuarioRepositoryMock
            .Setup(repo => repo.FindByEmail(It.IsAny<string>()))
            .ReturnsAsync((Usuario)null);

        var usuarioService = new UsuarioService(usuarioRepositoryMock.Object);
        var usuario = new Usuario
        {
            Nome = "Corretor Test",
            Email = "novoemail@example.com",
            CpfCnpj = "12345678901",
            Password = "senha123",
            Role = new string[] { "corretor" }
        };

        var result = await usuarioService.Create(usuario);

        Assert.NotNull(result);
        Assert.Equal(usuario.Email, result.Email);
        Assert.True(BCrypt.Net.BCrypt.Verify("senha123", result.Password));

        usuarioRepositoryMock.Verify(repo => repo.FindByEmail(usuario.Email), Times.Once);

        usuarioRepositoryMock.Verify(repo => repo.Create(usuario), Times.Once);
    }
    [Fact]
    public async Task Create_WithValidUsuario_ReturnsCreatedUsuario()
    {
        // Arrange
        var usuarioRepositoryMock = new Mock<IUsuarioRepository>();
        var usuarioService = new UsuarioService(usuarioRepositoryMock.Object);

        var usuario = new Usuario
        {
            Nome = "Test User",
            Email = "test@example.com",
            Password = "password",
            CpfCnpj = "123456789",
            Role = new string[] { "user" }
        };

        usuarioRepositoryMock.Setup(repo => repo.FindByEmail(It.IsAny<string>())).ReturnsAsync((Usuario)null);
        usuarioRepositoryMock.Setup(repo => repo.FindByCpfCnpj(It.IsAny<string>())).ReturnsAsync((Usuario)null);

        // Act
        var createdUsuario = await usuarioService.Create(usuario);

        // Assert
        Assert.NotNull(createdUsuario);
        Assert.Equal(usuario.Nome, createdUsuario.Nome);
        Assert.Equal(usuario.Email, createdUsuario.Email);
    }

    [Fact]
    public async Task Create_WithDuplicateEmail_ThrowsException()
    {
        // Arrange
        var usuarioRepositoryMock = new Mock<IUsuarioRepository>();
        var usuarioService = new UsuarioService(usuarioRepositoryMock.Object);

        var usuario = new Usuario
        {
            Nome = "Test User",
            Email = "test@example.com",
            Password = "password",
            CpfCnpj = "123456789",
            Role = new string[] { "user" }
        };

        usuarioRepositoryMock.Setup(repo => repo.FindByEmail(usuario.Email)).ReturnsAsync(usuario);
        usuarioRepositoryMock.Setup(repo => repo.FindByCpfCnpj(It.IsAny<string>())).ReturnsAsync((Usuario)null);

        // Act & Assert
        await Assert.ThrowsAsync<Exception>(() => usuarioService.Create(usuario));
    }

    [Fact]
    public async Task Create_WithDuplicateCpfCnpj_ThrowsException()
    {
        // Arrange
        var usuarioRepositoryMock = new Mock<IUsuarioRepository>();
        var usuarioService = new UsuarioService(usuarioRepositoryMock.Object);

        var usuario = new Usuario
        {
            Nome = "Test User",
            Email = "test@example.com",
            Password = "password",
            CpfCnpj = "123456789",
            Role = new string[] { "user" }
        };

        usuarioRepositoryMock.Setup(repo => repo.FindByEmail(It.IsAny<string>())).ReturnsAsync((Usuario)null);
        usuarioRepositoryMock.Setup(repo => repo.FindByCpfCnpj(usuario.CpfCnpj)).ReturnsAsync(usuario);

        // Act & Assert
        await Assert.ThrowsAsync<Exception>(() => usuarioService.Create(usuario));
    }
}
