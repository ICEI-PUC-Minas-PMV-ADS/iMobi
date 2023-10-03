using System.ComponentModel.DataAnnotations;

namespace iMobiApi.Dtos;

public class RegisterRequest
{
    [Required, EmailAddress]
    public string Email { get; set; } = string.Empty;

    public string Username { get; set; } = string.Empty;

    [Required, DataType(DataType.Password)]
    public string Password { get; set; } = string.Empty;

    [Required, DataType(DataType.Password), Compare(nameof(Password), ErrorMessage = "As senhas não coincidem!")]
    public string ConfirmPassword { get; set; } = string.Empty;
}