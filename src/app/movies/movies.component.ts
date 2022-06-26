import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
    }, error => {
      console.log(error)
    })
  }
}
