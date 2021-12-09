import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path:'', component :AppComponent },
  { path:'home', component :HomeComponent },
  { path:'signup', component :SignupComponent },
  { path:'login', component :LoginComponent },
  { path:'movies', component :MoviesComponent},
  { path:'movie/:movieId', component:MovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
