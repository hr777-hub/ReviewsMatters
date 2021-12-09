import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from './review';
import { ReviewService } from './review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  movieId:any
  constructor(private reviewService:ReviewService, private activeRoute: ActivatedRoute,
    private router:Router,private matDialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:any) {
      this.movieId = data.movieId
     }

  ngOnInit(): void {
  }
  
  onSubmit(form:NgForm){
    this.reviewService.addReview(form.value,this.movieId)   
  }
}


