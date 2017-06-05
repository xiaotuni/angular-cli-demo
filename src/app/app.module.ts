import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRouting } from './app.router';
import { CommonComponent, RouterComponent, PageComponentList } from './containers/Core';
import { AppComponent } from './app.component';
const Routers = AppRouting.Router();

@NgModule({
  declarations: [AppComponent, PageComponentList, CommonComponent],
  imports: [
    BrowserAnimationsModule, BrowserModule, FormsModule, HttpModule, Routers
  ],
  providers: [], // AnimationService
  bootstrap: [AppComponent]
})
export class AppModule { }
