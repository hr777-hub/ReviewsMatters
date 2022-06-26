import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ReviewComponent } from './review/review.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtInterceptor } from './jwt-interceptor';
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        HeaderComponent,
        HomeComponent,
        MoviesComponent,
        MovieComponent,
        ReviewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgxWebstorageModule.forRoot(),
        MatDialogModule,
        BrowserAnimationsModule
    ],
    providers: [{
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        }],
    bootstrap: [AppComponent]
})
export class AppModule { }
