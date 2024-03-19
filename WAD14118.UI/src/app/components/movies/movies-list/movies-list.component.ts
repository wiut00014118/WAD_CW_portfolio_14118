import { Component } from '@angular/core';
import { movie } from '../../../models/movie.model';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  
  movies: movie[]=
  [
    
  ];
  
  constructor(private moviesService: MoviesService ) { }

  ngOnInit():void{
    this.moviesService.getAllMovies()
    .subscribe({
      next: (movies) => {
        this.movies=movies;
        console.log(movies);
      },
      error: (response) => {
        console.log(response);
      },


    })
      
    }
}
