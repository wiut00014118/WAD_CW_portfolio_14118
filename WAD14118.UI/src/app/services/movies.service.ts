import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { movie } from '../models/movie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class MoviesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }


  getAllMovies():Observable<movie[]> {
    return this.http.get<movie[]>(this.baseApiUrl+ '/api/Movies')
  }

  addMovie(addMovieRequest:movie): Observable<movie>
  {addMovieRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<movie>(this.baseApiUrl + '/api/Movies', addMovieRequest);}
}
