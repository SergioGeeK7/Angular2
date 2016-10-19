//The RxJS operators are not available in Angular's
//base Observable implementation. We have to extend Observable by importing them.
//We could extend Observable with just the operators
//we need here by including the pertinent import statements at the top of this file.
import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }   from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component'
import { HeroService } from './hero.service'
import { DashboardComponent } from './dashboard.component'
import { routing } from './app.routing'
import { HeroSearchComponent } from './hero-search.component'


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule, // modules than export clasess 
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  //bootstrap - the main application view, called the root component, that hosts all other app views. Only the root module should set this bootstrap property.
  //providers // creators of services that this module contributes to the global collection of services; they become accessible in all parts of the app.
              // array of dependency injection (constructor) that providers for services that the component requires
  declarations: [ 
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent
   ],
   providers:[
     HeroService // injectable services ; we need this in some others views, global injectable service 
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
