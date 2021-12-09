import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Reviews } from './reviews';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  getMovie(movieId:number){
    return this.http.get<Movie>('http://localhost:8080/api/movies/' + movieId);
  }
  getAllReviewForMovie(movieId:number){
    return this.http.get<Reviews[]>('http://localhost:8080/api/review/' + movieId);
  }
}
