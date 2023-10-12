using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;

using IMobi.User.Api.Models;
using IMobi.User.Api.Configurations;
using System.Security.Claims;

namespace IMobi.User.Api.Services;
public class TokenService
{
    public string Generate(Usuario usuario)
    {
        var handler = new JwtSecurityTokenHandler();

        var key = Encoding.ASCII.GetBytes(JwtSettings.PrivateKey);

        var credentials = new SigningCredentials(new SymmetricSecurityKey(key), algorithm: SecurityAlgorithms.HmacSha256Signature);

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = GenerateClaims(usuario),
            SigningCredentials = credentials,
            Expires = DateTime.UtcNow.AddHours(9),
        };

        var token = handler.CreateToken(tokenDescriptor);

        return handler.WriteToken(token);
    }

    private static ClaimsIdentity GenerateClaims(Usuario usuario)
    {
        var ci = new ClaimsIdentity();

        ci.AddClaim(new Claim(ClaimTypes.Name, value: usuario.Id));

        foreach (var role in usuario.Role)
            ci.AddClaim(new Claim(ClaimTypes.Role, value: role));

        return ci;
    }
}