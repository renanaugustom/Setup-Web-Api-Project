using System;

namespace Repository.Common
{
    public interface IUnitOfWork : IDisposable
    {
        int Commit();
    }
}