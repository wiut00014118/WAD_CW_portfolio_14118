using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WAD14118.API.Data;
using WAD14118.API.Models;

namespace WAD14118.API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class MoviesController : Controller
    {
        private readonly MovieDbContext _movieDbContext;

        public MoviesController(MovieDbContext movieDbContext)
        {
            _movieDbContext = movieDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllMovies()
        {
            var movies = await _movieDbContext.Movies.ToListAsync();

            return Ok(movies);
        }

        [HttpPost]
        public async Task<IActionResult> AddMovie([FromBody] Movie movieRequest)
        {
            movieRequest.Id=Guid.NewGuid();
            await _movieDbContext.Movies.AddAsync(movieRequest);
            await _movieDbContext.SaveChangesAsync();

            return Ok(movieRequest);
        }
    }
}
