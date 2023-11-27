namespace IMobi.Images.Api.Dtos;

public class ImageDto
{
    public string PropriedadeId { get; set; } = string.Empty;
    public IFormFile? ArquivoImagem { get; set; }

    public string PropriedadeImagem { get; set; } = string.Empty;
    public int Ordem { get; set; }
}