import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from './movie';
import { MovieService } from './movie.service';
import { Reviews } from './reviews';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReviewComponent } from 'src/app/review/review.component';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieId:number;
  reviews:Reviews[];
  movie:Movie;
  constructor(private activeRoute:ActivatedRoute, private movieService:MovieService, private matDialog: MatDialog
    ) {
    this.movieId = this.activeRoute.snapshot.params.movieId;
   }

  ngOnInit(): void {
    this.getMovie();
    this.getAllReviewForMovie();
  }
  getMovie(){
    this.movieService.getMovie(this.movieId).subscribe(data =>{
      this.movie = data;
    }, error => {
      console.log(error);
    })
  }

  getAllReviewForMovie(){
    this.movieService.getAllReviewForMovie(this.movieId).subscribe(data => {
      this.reviews = data;
      console.log(this.reviews[0])
    }, error =>{
      console.log(error);
    })
  }

  onAddReview(){
  this.matDialog.open(ReviewComponent,{data:{movieId: this.movieId}})
  }
}
