import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { routeAnimation } from './app.animations';
import { AnimationService } from './app.animation.service';

import { Utility } from './app.coms';

@Component({
  moduleId: module.id,
  selector: 'selector',
  animations: [routeAnimation]
})
export class BaseComponent implements OnInit {
  @HostBinding("@routing") get routing() {
    // if (!this._animationService) {
    //   return 'forward';
    // }
    // return this._animationService.routing || 'forward';

    const a = Utility.$GetContent(Utility.$ConstItem.AppIsGoBack);
    return !!a ? 'backward' : 'forward';
  }
  @HostBinding('style.display') display = "block";
  _animationServiceEventsSubscription: any;

  constructor(private route: Router, private _animationService: AnimationService) {
  }

  __ListenEmit() {
    if (this.route) {

      this.route.events.subscribe((e) => {
        // console.log(e);
      });

    }
  }

  ngOnInit() {
    // if (this.__CurrentTime) {
    //   return;
    // }
    // this.__CurrentTime = new Date().getTime();
    // this.routing = this._animationService.animationDirection();
    // this._animationServiceEventsSubscription = this._animationService.emitCurrentDirection.subscribe((direction: any) => {
    //   this.routing = direction;
    // });
  }

  routeFn(direction: string, nextRoute: string) {
    this.NextPage(nextRoute);
    // return this._animationService.routingService(direction, nextRoute);
  }

  NextPage(url) {
    Utility.$ToPage(url, {});
    // this._animationService.NextPage(url, {});
  }

  GoBack() {
    Utility.$GoBack();
    // this._animationService.GoBack();
  }
}