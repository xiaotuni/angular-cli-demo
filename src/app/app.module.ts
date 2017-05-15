import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRouting } from './app.router';
import { CommonComponent, RouterComponent } from './containers/Core';
import { AppComponent } from './app.component';


const __Keys = Object.keys(RouterComponent);
const PageComponentList = [];
__Keys.forEach((key) => {
  PageComponentList.push(RouterComponent[key]);
});

@NgModule({
  declarations: [AppComponent, PageComponentList, CommonComponent],
  imports: [
    BrowserAnimationsModule, BrowserModule, FormsModule, HttpModule,
    AppRouting
  ],
  providers: [], // AnimationService
  bootstrap: [AppComponent]
})
export class AppModule { }
