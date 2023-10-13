namespace IMobi.User.Api.Dtos
{
    public class CreateUsuarioDto
    {
        public string Nome { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string CpfCnpj { get; set; } = string.Empty;
        public string Creci { get; set; } = string.Empty;
        public required string[] Role { get; set; }
    }
}
