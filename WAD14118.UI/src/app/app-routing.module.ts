import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';

const routes: Routes = [
  {
    path: '',
    component:MoviesListComponent


  },
  {
    path: 'movies',
    component:MoviesListComponent


  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
