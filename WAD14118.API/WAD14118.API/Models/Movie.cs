namespace WAD14118.API.Models
{
    public class Movie
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Genre { get; set; }
        public int Rating { get; set; }
        public string ImdbUrl { get; set; }
        public string ImageUrl { get; set; }
    }
}
