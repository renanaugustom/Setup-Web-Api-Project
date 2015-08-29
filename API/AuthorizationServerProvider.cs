using Microsoft.Owin.Security.OAuth;
using Repository.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace API
{
    public class AuthorizationServerProvider : OAuthAuthorizationServerProvider
    {
        IUserRepository _userRepository;

        public AuthorizationServerProvider(IUserRepository UserRepository)
        {
            _userRepository = UserRepository;
        }

        /// <summary>
        /// Método responsável por validar o Token em cache. (Responsabilidade do OAuth).
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });

            try
            {
                var userName = context.UserName;
                var password = context.Password;

                //var user = _userRepository.GetByNameAndPassword(userName, password);

                //Use your logic here to validate user
                if(userName != "renan" || password != "renan")
                {
                    context.SetError("invalid_grant", "Usuário ou senha inválidos");
                    return;
                }

                //Add users name in identity
                var identity = new ClaimsIdentity(context.Options.AuthenticationType);
                identity.AddClaim(new Claim(ClaimTypes.Name, userName));

                var roles = new List<string>();
                roles.Add("User");

                foreach (var role in roles)
                {
                    identity.AddClaim(new Claim(ClaimTypes.Role, role));
                }

                GenericPrincipal principal = new GenericPrincipal(identity, roles.ToArray());
                Thread.CurrentPrincipal = principal;

                context.Validated(identity);
            }
            catch (Exception)
            {
                
                throw;
            }
        }


    }
}
