using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using IMobi.User.Api.Models;
using Xunit;
using IMobi.User.Api.Configurations;

namespace IMobi.User.Api.Services.Tests
{
    public class TokenServiceTests
    {
        [Fact]
        public void GenerateToken_ReturnsValidToken()
        {
            // Arrange
            var tokenService = new TokenService();
            var usuario = new Usuario
            {
                Id = "12345",
                Role = new[] { "User", "Admin" }
            };

            // Act
            var token = tokenService.Generate(usuario);

            // Assert
            Assert.NotNull(token);
            Assert.NotEmpty(token);

            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = false, // You may need to configure these as needed
                ValidateAudience = false,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(JwtSettings.PrivateKey))
            };

            SecurityToken validatedToken;
            var principal = tokenHandler.ValidateToken(token, tokenValidationParameters, out validatedToken);

            var identity = principal.Identity as ClaimsIdentity;
            Assert.NotNull(identity);

            Assert.Equal(usuario.Id, identity.FindFirst(ClaimTypes.Name)?.Value);

            var rolesClaim = identity.FindAll(ClaimTypes.Role);
            // Verifique se as reivindicações de função "User" e "Admin" existem
            Assert.True(rolesClaim.Any(c => c.Value.Equals("User", StringComparison.OrdinalIgnoreCase)));
            Assert.True(rolesClaim.Any(c => c.Value.Equals("Admin", StringComparison.OrdinalIgnoreCase)));

        }
    }
}
