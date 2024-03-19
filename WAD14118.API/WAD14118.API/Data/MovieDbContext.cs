using Microsoft.EntityFrameworkCore;
using WAD14118.API.Models;

namespace WAD14118.API.Data
{
    public class MovieDbContext : DbContext
    {
        public MovieDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Movie> Movies { get; set; }

    }
}
