import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MoviesService } from '../../../services/movies.service';
import { movie } from '../../../models/movie.model';

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrl: './editmovie.component.css'
})
export class EditmovieComponent implements OnInit{

  movieDetails: movie= {
    id: '',
    title:'',
    genre: '',
    rating: 0,
    imdbUrl: '',
    imageUrl: ''
  }

  constructor(private route: ActivatedRoute, private Movieservice:
    MoviesService, private router: Router) {}


  ngOnInit(): void {

    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.Movieservice.getMovie(id)
          .subscribe
              ({next: (response) =>{
                this.movieDetails = response;
            
          } 
        });

        }
      }
    })
  }

  updateMovie(){

    this.Movieservice.updateMovie(this.movieDetails.id, this.movieDetails )
    .subscribe({
      next: (response) => {
        this.router.navigate(['movies']);
      }
    });

  }

  deleteMovie(id:string){
    this.Movieservice.deleteMovie(id)
    .subscribe({
      next: (response) => {
        this.router.navigate (['movies']);

      }
    });

  }
}
