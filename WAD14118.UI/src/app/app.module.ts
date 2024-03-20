import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddMovieComponent } from './components/movies/add-movie/add-movie.component';
import { FormsModule } from '@angular/forms';
import { EditmovieComponent } from './components/movies/editmovie/editmovie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    AddMovieComponent,
    EditmovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
