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


        [HttpGet]
        [Route("{id:Guid}")]

        public async Task<IActionResult> GetMovie([FromRoute] Guid id)
        {
           var movie =
                await _movieDbContext.Movies.FirstOrDefaultAsync(x => x.Id ==id);

            if (movie == null)
            {
                return NotFound();
            }

            return Ok(movie);
        }


        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateMovie([FromRoute] Guid id, Movie updateMovieRequest)
        {
           var movie = await _movieDbContext.Movies.FindAsync(id);

            if (movie == null) { NotFound (); }

            movie.Title = updateMovieRequest.Title;
            movie.Genre = updateMovieRequest.Genre;
            movie.Rating = updateMovieRequest.Rating;
            movie.ImdbUrl = updateMovieRequest.ImdbUrl;
            movie.ImageUrl = updateMovieRequest.ImageUrl;

            await _movieDbContext.SaveChangesAsync();

            return Ok(movie);
        }

        [HttpDelete]
        [Route("{id:Guid}")]

        public async Task<IActionResult> DeleteMovie([FromRoute] Guid id)
        {
            var movie = await _movieDbContext.Movies.FindAsync(id);

            if (movie == null)
            {
                return NotFound();
            }
            _movieDbContext.Movies.Remove(movie);
            await _movieDbContext.SaveChangesAsync();

            return Ok(movie);
        }
    }
}
