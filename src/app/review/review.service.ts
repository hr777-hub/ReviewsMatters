import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  addReview(review: Review,movieId:number):void{
    review.movieId = movieId
    this.http.post<void>('http://localhost:8080/api/review/add', review).subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error)
    })
    
  }
}
