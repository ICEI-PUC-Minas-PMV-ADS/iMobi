using BCrypt.Net;
using System.Security.Claims;
using System.Text;
using iMobiApi.Dtos;
using IMobiApi.Models;
using iMobiApi.Repositories;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

namespace iMobiApi.Services
{
    public class UserService
    {
        private readonly UserRepository _userRepository;

        public UserService(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<RegisterResponse> Register(RegisterRequest request)
        {
            try
            {
                var userExists = await _userRepository.FindByEmail(request.Email);
                if (userExists != null) return new RegisterResponse { Message = "Usuário já existe", Success = false };

                // If we get here, no user with this email exists.
                var user = new ApplicationUser
                {
                    Email = request.Email,
                    UserName = request.Username,
                    ConcurrencyStamp = Guid.NewGuid().ToString(),
                    PasswordHash = BCrypt.Net.BCrypt.HashPassword(request.Password, 12),
                };

                var createUserResult = await _userRepository.CreateUser(user, request.Password);

                if (!createUserResult.Succeeded)
                    return new RegisterResponse { Message = $"Um erro ocorreu ao criar um usuário {createUserResult.Errors.FirstOrDefault()?.Description}", Success = false };

                return new RegisterResponse { Success = true, Message = "User registered successfully" };
            }
            catch (Exception ex)
            {
                return new RegisterResponse { Message = ex.Message, Success = false };
            }
        }

        public async Task<LoginResponse> Login(LoginRequest request)
        {
            try
            {
                var user = await _userRepository.AuthenticateUser(request.Email, request.Password);

                if (user == null)
                {
                    return new LoginResponse { Message = "Credenciais inválidas.", Success = false };
                }

                var claims = new List<Claim>
                {
                    new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
                };

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("1swek3u4uo2u4a6e"));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                var expires = DateTime.Now.AddMinutes(30);

                var token = new JwtSecurityToken(
                    issuer: "https://localhost:5001",
                    audience: "https://localhost:5001",
                    claims: claims,
                    expires: expires,
                    signingCredentials: creds
                );

                return new LoginResponse
                {
                    AccessToken = new JwtSecurityTokenHandler().WriteToken(token),
                    Message = "Login Successful",
                    Email = user.Email,
                    Success = true,
                    UserId = user.Id.ToString(),
                };
            }
            catch (Exception ex)
            {
                return new LoginResponse { Success = false, Message = ex.Message };
            }
        }

    }
}
