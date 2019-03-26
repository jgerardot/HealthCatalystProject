using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using HealthCatalystProject.Data;
using HealthCatalystProject.Models;

namespace HealthCatalystProject.Controllers
{
    public class UsersController : ApiController
    {
        private AppDbContext db = new AppDbContext();

        // GET: api/Users/5
        [Route("api/Users/")]
        [ResponseType(typeof(List<User>))]
        [HttpGet]
        public async Task<IHttpActionResult> GetUsers()
        {
            await Task.Delay(new Random().Next(1000, 10000));
            return Ok(new List<User>());
        }

        // GET: api/Users/5
        [Route("api/Users/{searchString}")]
        [ResponseType(typeof(List<User>))]
        [HttpGet]
        public async Task<IHttpActionResult> GetUsers(string searchString)
        {
            List<User> users = await db.Users.Where(u => u.FirstName.Contains(searchString) || u.LastName.Contains(searchString)).ToListAsync();
            await Task.Delay(new Random().Next(1000, 10000));
            return Ok(users);
        }
        
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}