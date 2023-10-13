using IMobi.User.Api.Models;
using MongoDB.Driver;

namespace IMobi.User.Api.Data;

public interface IIMobiDbContext
{
    IMongoCollection<Usuario> Usuario { get; }
}