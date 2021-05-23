using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApplication_API.Models;

namespace WebApplication_APP.Data
{
    public class WebApplication_APPContext : DbContext
    {
        public WebApplication_APPContext (DbContextOptions<WebApplication_APPContext> options)
            : base(options)
        {
        }

        public DbSet<WebApplication_API.Models.Color> Color { get; set; }
    }
}
