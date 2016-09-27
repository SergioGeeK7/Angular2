import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BtnMyAppsComponent} from '../btnmyapps/btnmyapps.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    BtnMyAppsComponent
  ],
  bootstrap: [ AppComponent, BtnMyAppsComponent ]
})
export class AppModule { }
