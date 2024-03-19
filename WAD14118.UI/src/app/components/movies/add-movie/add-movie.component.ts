import { Component, OnInit } from '@angular/core';
import { movie } from '../../../models/movie.model';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent implements OnInit {

  addMovieRequest: movie = {
    id: '',
    title:'',
    genre: '',
    rating: 0,
    imdbUrl: '',
    imageUrl: ''
  };

  constructor(private movieService: MoviesService){
    
  }
  
  ngOnInit(): void {
    
  }

  addMovie() {
    this.movieService.addMovie(this.addMovieRequest)
    .subscribe({
      next: (movie) =>{
        console.log(movie);
      }
    });
   }

}
