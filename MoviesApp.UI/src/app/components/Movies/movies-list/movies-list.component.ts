import { Component, OnInit } from '@angular/core';
import { movie } from '../../../models/movie.model';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})


export class MoviesListComponent  implements OnInit
{
  movies: movie[] = [
    { Title: "The Sorcerer's Stone", 
      Genre: "Horror", 
      Rating: 3, 
      ImdbUrl: "Random Link 1", 
      ImageUrl: "Random Image 1" },

    { Title: "Chamber of Secrets", Genre: "Fantasy", Rating: 4, ImdbUrl: "Random Link 2", ImageUrl: "Random Image 2" },
    { Title: "Prisoner of Azkaban", Genre: "Adventure", Rating: 2, ImdbUrl: "Random Link 3", ImageUrl: "Random Image 3" },
    { Title: "Goblet of Fire", Genre: "Mystery", Rating: 5, ImdbUrl: "Random Link 4", ImageUrl: "Random Image 4" },
    { Title: "Order of the Phoenix", Genre: "Sci-Fi", Rating: 4, ImdbUrl: "Random Link 5", ImageUrl: "Random Image 5" }

  ];
  constructor() {}

  ngOnInit():void
  {
 
  }


}
