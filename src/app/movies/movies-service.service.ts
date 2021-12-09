import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from './movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  constructor(private http: HttpClient) { }

  public getMovies():Observable<Movies[]>{
    return this.http.get<Movies[]>('http://localhost:8080/api/movies/all');
  }
}
