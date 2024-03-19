import { Component } from '@angular/core';
import { movie } from '../../../models/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  
  movies: movie[]=[
    {
      Id:'gaegaeg',
      Title:'Hello',
      Genre:'Hottor',
      Rating: 5 ,
      ImdbUrl:'link',
      ImageUrl:'link'
}
  ];
  
  constructor(){}
    ngOnInit():void{
      
    }
}
