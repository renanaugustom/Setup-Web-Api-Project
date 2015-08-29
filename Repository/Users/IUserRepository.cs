using Domain.Models;
using Repository.Common;

namespace Repository.Users
{
    public interface IUserRepository : IGenericRepository<User>
    {
        User GetByNameAndPassword(string name, string password);
    }
}
