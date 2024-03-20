import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { AddMovieComponent } from './components/movies/add-movie/add-movie.component';
import { EditmovieComponent } from './components/movies/editmovie/editmovie.component';

const routes: Routes = [
  {
    path: '',
    component:MoviesListComponent
  },
  {
    path: 'movies',
    component:MoviesListComponent
  },
  {
    path: 'movies/add',
    component:AddMovieComponent
  },

  {
    path: 'movies/edit/:id',
    component:EditmovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
