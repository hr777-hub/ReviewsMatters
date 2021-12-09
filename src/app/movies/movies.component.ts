import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Movies } from './movies';
import { MoviesServiceService } from './movies-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies: Movies[];

  constructor(private movieService: MoviesServiceService, private router:Router) { }

  ngOnInit() : void {
    this.getMovies();
  }
  public getMovies(){
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
    }, error => {
      throwError(error);
    });
  }

  goToMovie(movie:Movies): void{
    this.router.navigate(['/movie', movie.movieId])
  }

}
