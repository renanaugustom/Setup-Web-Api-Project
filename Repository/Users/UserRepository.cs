using Repository.Common;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Models;

namespace Repository.Users
{
    public class UserRepository: GenericRepository<User>, IUserRepository
    {
        public UserRepository(DbContext context)
            : base(context)
        {

        }

        public User GetByNameAndPassword(string name, string password)
        {
            return _dbset.SingleOrDefault(x => x.Name == name && x.Password == password);
        }
    }
}