import { Component, HostBinding } from '@angular/core';
import { routeAnimation } from './app.animations';
import { Utility } from './Core';

@Component({
  moduleId: module.id,
  selector: 'selector',
  animations: [routeAnimation]
})
export class BaseComponent {
  __Title: string = '';
  @HostBinding("@routing") get routing() {
    const IsGoBack = Utility.$GetContent(Utility.$ConstItem.AppIsGoBack);
    return !!IsGoBack ? 'backward' : 'forward';
  }
  // @HostBinding('style.display') display = "block";
  

  constructor() {

    // get brower title 
    this.__GetBrowerTitle();
  }

  __GetBrowerTitle() {
    const titleServer: any = Utility.$GetContent(Utility.$ConstItem.BrowerTitle);
    if (titleServer && titleServer.getTitle) {
      this.__Title = titleServer.getTitle() || '';
    }
  }


  routeFn(direction: string, nextRoute: string) {
    this.NextPage(nextRoute);
  }

  NextPage(url) {
    Utility.$ToPage(url, {});
  }

  GoBack() {
    Utility.$GoBack();
  }
}