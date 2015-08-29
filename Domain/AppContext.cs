using Domain.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class AppContext: DbContext 
    { 
        public virtual DbSet<User> Users { get; set; } 
    }       
}