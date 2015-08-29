using Repository.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Service.Common
{
    public class EntityService<T> where T : class
    {
        IGenericRepository<T> _repository;

        public EntityService(IGenericRepository<T> repository)
        {
            _repository = repository;
        }

        protected void Save(T entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException("Null Entity");
            }
            _repository.Add(entity);
        }

        protected void Update(T entity)
        {
            if (entity == null) throw new ArgumentNullException("Null Entity");
            _repository.Edit(entity);
        }

        protected void Delete(T entity)
        {
            if (entity == null) throw new ArgumentNullException("Null Entity");
            _repository.Delete(entity);
        }

        protected IQueryable<T> GetAll()
        {
            return _repository.GetAll();
        }

        protected IEnumerable<T> FindBy(Expression<Func<T, bool>> filter = null, Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null, string includeProperties = "")
        {
            return _repository.FindBy(filter, orderBy, includeProperties);
        }
    }
}