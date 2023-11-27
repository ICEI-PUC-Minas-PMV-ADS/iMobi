namespace IMobi.Images.Api.Repositories;

public class FileRepository : IFileRepository
{
    private IWebHostEnvironment _environment;


    public FileRepository(IWebHostEnvironment env)
    {
        _environment = env;
    }

    public Tuple<int, string> SaveImage(IFormFile imageFile)
    {
        try
        {
            var contentPath = _environment.ContentRootPath;
            var path = Path.Combine(contentPath, "Uploads");

            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            var ext = Path.GetExtension(imageFile.FileName);
            var allowedExtensions = new string[] { ".jpg", ".png", ".jpeg" };

            if (!allowedExtensions.Contains(ext))
            {
                string msg = string.Format("Apenas {0} extensões são permitidas", string.Join(", ", allowedExtensions));
                return new Tuple<int, string>(0, msg);
            }

            string uniqueString = Guid.NewGuid().ToString();

            var newFileName = uniqueString + ext;
            var fileWithPath = Path.Combine(path, newFileName);
            var stream = new FileStream(fileWithPath, FileMode.Create);

            imageFile.CopyTo(stream);

            stream.Close();

            return new Tuple<int, string>(1, newFileName);
        }
        catch (Exception ex)
        {
            return new Tuple<int, string>(0, "Um erro foi encontrado");
        }
    }


    public async Task<bool> DeleteImage(string imageFileName)
    {
        try
        {
            var wwwPath = this._environment.WebRootPath;
            var path = Path.Combine(wwwPath, "Uploads\\", imageFileName);

            if (File.Exists(path))
            {
                await Task.Run(() => File.Delete(path));
                return true;
            }

            return false;
        }
        catch (Exception ex)
        {
            return false;
        }
    }

}
