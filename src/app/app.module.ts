import { MoviesService } from './services/movies.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { RatingComponent } from './components/rating/rating.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieListComponent,
    RatingComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'create',
        component: DetailsComponent,
      },
      {
        path: 'movie/:id',
        component: DetailsComponent,
      },
      {
        path: '**',
        redirectTo: '/'
      }
    ]),

  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
