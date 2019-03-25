using HealthCatalystProject.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace HealthCatalystProject.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext() : base("HealthCatalystProjectConnectionString")
        {            
        }

        public static AppDbContext Create()
        {
            return new AppDbContext();
        }

        public DbSet<User> Users { get; set; }
    }
}