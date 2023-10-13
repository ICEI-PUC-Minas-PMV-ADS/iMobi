using IMobi.Images.Api.Models;
using MongoDB.Driver;

namespace IMobi.User.Api.Data;

public interface IIMobiDbContext
{
    IMongoCollection<Image> Imagem { get; }
}