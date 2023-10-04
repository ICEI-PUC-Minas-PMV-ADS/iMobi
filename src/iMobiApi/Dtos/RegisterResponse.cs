using System.ComponentModel.DataAnnotations;

namespace iMobiApi.Dtos;

public class RegisterResponse
{
    public string Message { get; set; } = string.Empty;
    public bool Success { get; set; }
}