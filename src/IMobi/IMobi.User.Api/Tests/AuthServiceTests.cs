using Xunit;
using Moq;
using IMobi.User.Api.Models;
using IMobi.User.Api.Services;
using IMobi.User.Api.Repositories;

namespace IMobi.User.Api.Tests
{
    public class AuthServiceTests
    {
        [Fact]
        public async Task Authenticate_WithValidCredentials_ShouldReturnUsuario()
        {
            // Arrange
            var usuarioRepositoryMock = new Mock<IUsuarioRepository>();
            var authService = new AuthService(usuarioRepositoryMock.Object);

            var email = "test@example.com";
            var password = "password123";

            var usuario = new Usuario
            {
                Nome = "Test User",
                Email = email,
                Password = BCrypt.Net.BCrypt.HashPassword(password),
                CpfCnpj = "123456789",
                Role = new string[] { "user" }
            };

            usuarioRepositoryMock.Setup(repo => repo.FindByEmail(email)).ReturnsAsync(usuario);

            // Act
            var result = await authService.Authenticate(email, password);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(usuario.Email, result.Email);
        }

        [Fact]
        public async Task Authenticate_WithInvalidCredentials_ShouldReturnNull()
        {
            // Arrange
            var usuarioRepositoryMock = new Mock<IUsuarioRepository>();
            var authService = new AuthService(usuarioRepositoryMock.Object);

            var email = "test@example.com";
            var password = "invalidpassword";

            var usuario = new Usuario
            {
                Nome = "Test User",
                Email = email,
                Password = BCrypt.Net.BCrypt.HashPassword("password123"), // Senha correta
                CpfCnpj = "123456789",
                Role = new string[] { "user" }
            };

            usuarioRepositoryMock.Setup(repo => repo.FindByEmail(email)).ReturnsAsync(usuario);

            // Act
            var result = await authService.Authenticate(email, password);

            // Assert
            Assert.Null(result);
        }

        [Fact]
        public async Task Authenticate_WithNonexistentUser_ShouldThrowException()
        {
            // Arrange
            var usuarioRepositoryMock = new Mock<IUsuarioRepository>();
            var authService = new AuthService(usuarioRepositoryMock.Object);

            var email = "nonexistent@example.com";
            var password = "password123";

            usuarioRepositoryMock.Setup(repo => repo.FindByEmail(email)).ReturnsAsync((Usuario)null);

            // Act & Assert
            await Assert.ThrowsAsync<Exception>(() => authService.Authenticate(email, password));
        }
    }
}
