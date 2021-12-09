import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from './login/login';
import { Signup } from './signup/Signup';
import { map } from 'rxjs/operators';
import { LoginResponse } from './login/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() username: EventEmitter<string> = new EventEmitter();

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }

  signup(signup:Signup):Observable<string>{
    return this.http.post<string>('http://localhost:8080/api/v1/auth/register',
    signup);
  }

  login(login:Login):Observable<boolean>{
    const headers = { 'content-type': 'application/json'};
    const params = new HttpParams() .set('username', login.username).set('password',login.password);
    const body = JSON.stringify(login);
    return this.http.post<LoginResponse>('http://localhost:8080/api/login',
    body,{'headers':headers, 'params': params}).pipe(map(data=>{
      this.localStorage.store('accessToken',data.access_token);
      this.localStorage.store('refreshToken',data.refresh_token);
      this.localStorage.store('username', data.username);
      this.loggedIn.emit(true);
      this.username.emit(data.username);
      return true;
    }));
  }
  isLoggedIn(): boolean {
    return this.getJwtToken() != null;
  }
  getJwtToken() {
    return this.localStorage.retrieve('accessToken');
  }
  logout(){
    this.http.get('http://localhost:8080/logout').subscribe(data => {
      console.log(data);
    },error => {
      console.log(error)
    });
    this.localStorage.clear('accessToken');
    this.localStorage.clear('refreshToken');
    this.localStorage.clear('username');
    this.loggedIn.emit(false);
  }
}
