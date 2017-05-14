import { Component, HostBinding } from '@angular/core';
import { routeAnimation } from './app.animations';
import { Utility } from './app.coms';

@Component({
  moduleId: module.id,
  selector: 'selector',
  animations: [routeAnimation]
})
export class BaseComponent {
  @HostBinding("@routing") get routing() {
    const IsGoBack = Utility.$GetContent(Utility.$ConstItem.AppIsGoBack);
    return !!IsGoBack ? 'backward' : 'forward';
  }
  @HostBinding('style.display') display = "block";
  _animationServiceEventsSubscription: any;

  constructor() {
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