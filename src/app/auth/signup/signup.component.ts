import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {

  
  constructor(private authservice:AuthService, private route:Router) { 
  }

  ngOnInit() {
    
  }
  onSubmit(form:NgForm){

    this.authservice.signup(form.value).subscribe(resData => {
      console.log(resData);
    }, error => {
      console.log(error);
    });
    this.route.navigate(['/movies'])
  }

}
