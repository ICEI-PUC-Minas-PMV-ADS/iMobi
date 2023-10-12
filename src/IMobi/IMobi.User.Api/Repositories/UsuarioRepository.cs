using BCrypt.Net;
using MongoDB.Driver;
using IMobi.User.Api.Data;
using IMobi.User.Api.Models;

namespace IMobi.User.Api.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly IIMobiDbContext _context;

        public UsuarioRepository(IIMobiDbContext context)
        {
            _context = context;
        }

        public async Task Create(Usuario usuario)
        {
            usuario.Password = BCrypt.Net.BCrypt.HashPassword(usuario.Password);

            await _context.Usuario.InsertOneAsync(usuario);
        }

        public async Task<List<Usuario>> Read()
        {
            return await _context.Usuario.Find(_ => true).ToListAsync();
        }

        public async Task<Usuario> FindById(string id)
        {
            return await _context.Usuario.Find(u => u.Id == id).FirstOrDefaultAsync();
        }

        public async Task<Usuario> Authenticate(string email, string password)
        {
            // Implemente a lógica para buscar um usuário com base no email e senha.
            return await _context.Usuario.Find(u => u.Email == email && u.Password == password).FirstOrDefaultAsync();
        }

        public async Task Update(string id, Usuario usuario)
        {
            var filter = Builders<Usuario>.Filter.Eq(u => u.Id, id);
            var update = Builders<Usuario>.Update
                .Set(u => u.Email, usuario.Email)
                .Set(u => u.Password, usuario.Password);

            await _context.Usuario.UpdateOneAsync(filter, update);
        }

        public async Task Delete(string id)
        {
            var filter = Builders<Usuario>.Filter.Eq(u => u.Id, id);
            await _context.Usuario.DeleteOneAsync(filter);
        }
    }
}
