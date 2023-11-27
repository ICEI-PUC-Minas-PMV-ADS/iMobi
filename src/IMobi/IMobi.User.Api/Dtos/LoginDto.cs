namespace IMobi.User.Api.Dtos
{
    public class LoginDto : ILoginDto
    {
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
