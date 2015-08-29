
using Domain.Models;
using Repository.Users;
using Service.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Users
{
    public class UserService : EntityService<User>, IUserService
    {
        IUserRepository _usuarioRepository;

        public UserService(IUserRepository usuarioRepository)
            : base(usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }
    }
}
