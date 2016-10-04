import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component'
import { HeroService } from './hero.service'
import { routing } from './app.routing'
import { DashboardComponent } from './dashboard.component'


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [ 
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
   ],
   providers:[
     HeroService // injectable services ; we need this in some others views
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
