import { Routes } from '@angular/router';
import { MoviesListComponent } from './components/Movies/movies-list/movies-list.component';

export const routes: Routes = [
{
    path: '',
    component:MoviesListComponent

},

{
    path: 'movies',
    component:MoviesListComponent

}

];
