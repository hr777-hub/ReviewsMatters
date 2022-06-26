import { Component, OnInit, ChangeDetectionStrategy,} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(private authservice: AuthService, private route:Router, private toast:NgToastService) { }

  ngOnInit(): void {
  }
  
  onSubmit(form:NgForm){
    this.authservice.login(form.value).subscribe(resData => {
      this.toast.success({detail:"Success", summary:"Login Successfully!", duration:5000})
    }, error => {
      this.toast.error({detail:"Error", summary:"Please check username and password", duration:5000})
    });
    this.route.navigate(['/movies'])
  }
}


