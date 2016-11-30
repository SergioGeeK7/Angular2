import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

/*

After the import statements, you come to a class adorned with the @NgModule decorator.

The @NgModule decorator identifies AppModule as an Angular module class (also called an NgModule class). @NgModule takes a metadata object that tells Angular how to compile and launch the application.

imports — the BrowserModule that this and every application needs to run in a browser.
declarations — the application's lone component, which is also ...
bootstrap — the root component that Angular creates and inserts into the index.html host web page.

Only NgModule classes go in the imports array. Don't put any other kind of class in imports.


Only declarables — components, directives and pipes — belong in the declarations array.   Don't put any other kind of class in declarations; not NgModule classes, not service classes, not model classes.

*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
