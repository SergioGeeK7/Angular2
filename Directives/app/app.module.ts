import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    HighlightDirective,
    UnlessDirective
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
