import { Component, OnInit, ChangeDetectionStrategy,} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(private authservice: AuthService, private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.authservice.login(form.value).subscribe(resData => {
      console.log(resData);
    }, error => {
      console.log(error);
    });
    this.route.navigate(['/movies'])
  }
}


