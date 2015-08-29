using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    [Route("User")]
    public class UserController : ApiController
    {
        [Authorize()]
        public HttpResponseMessage Get()
        {
            return Request.CreateResponse(HttpStatusCode.OK, User.Identity.Name);
        }
    }
}
