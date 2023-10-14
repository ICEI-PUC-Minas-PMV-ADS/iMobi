namespace IMobi.User.Api.Dtos;

public interface ILoginDto
{
    public string Email { get; set; }
    public string Password { get; set; }
}