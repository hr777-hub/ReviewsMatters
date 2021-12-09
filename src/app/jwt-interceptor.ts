import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.authenticationService.getJwtToken();
    
    if (token) {
      return next.handle(this.addToken(request, token))
  }
  console.log(token)
  return next.handle(request);
  }

  addToken(req: HttpRequest<any>, token: any) {
    return req.clone({
        headers: req.headers.set('Authorization',
            'Bearer ' + token)
    });
}
}