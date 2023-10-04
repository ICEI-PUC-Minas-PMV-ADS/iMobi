using IMobiApi.Models;
using Microsoft.AspNetCore.Identity;

namespace iMobiApi.Repositories
{
    public class UserRepository
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly PasswordHasher<ApplicationUser> _passwordHasher;

        public UserRepository(UserManager<ApplicationUser> userManager, PasswordHasher<ApplicationUser> passwordHasher)
        {
            _userManager = userManager;
            _passwordHasher = passwordHasher;
        }

        public async Task<ApplicationUser> FindByEmail(string email)
        {
            return await _userManager.FindByEmailAsync(email);
        }

        public async Task<IdentityResult> CreateUser(ApplicationUser user, string password)
        {

            var hashedPassword = _passwordHasher.HashPassword(user, password);
            user.PasswordHash = hashedPassword;

            return await _userManager.CreateAsync(user);
        }

        public async Task<ApplicationUser> AuthenticateUser(string email, string password)
        {
            var user = await _userManager.FindByEmailAsync(email);

            if (user != null)
            {
                var result = _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, password);

                if (result == PasswordVerificationResult.Success)
                {
                    return user; // Senha válida
                }
            }

            return null; // Credenciais inválidas
        }
    }
}
