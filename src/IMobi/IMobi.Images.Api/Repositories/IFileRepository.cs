using IMobi.Images.Api.Models;

namespace IMobi.Images.Api.Repositories
{
    public interface IFileRepository
    {
        Tuple<int, string> SaveImage(IFormFile imageFile);
        Task<bool> DeleteImage(string imageFileName);
    }
}
