namespace IMobi.User.Api.Dtos
{
    public interface ICreateUsuarioDto
    {
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string CpfCnpj { get; set; }
        public string Creci { get; set; }
        public string[] Role { get; set; }
    }
}
