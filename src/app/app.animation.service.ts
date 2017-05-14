import { HostBinding, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable()

export class AnimationService {
  // emitCurrentDirection: EventEmitter<Object> = new EventEmitter<Object>();
  routing: string;
  __R: Router;

  constructor(private _router: Router, private location: Location) {
    this.__R = _router;
  }

  animationDirection() {
    return this.routing;
  }

  routingService(direction, nextRoute) {
    this.routing = direction;
    // this.emitCurrentDirection.emit(this.routing);
    setTimeout(() => { // timeoiut pushes this code to the back of the event queue
      this._router.navigateByUrl(nextRoute)
    });
  }

  NextPage(Url, params) {
    this.routing = 'forward';
    // this.emitCurrentDirection.emit(this.routing);
    setTimeout(() => {
      this._router.navigateByUrl(Url)
    });
  }

  GoBack() {
    this.routing = 'backward';
    // this.emitCurrentDirection.emit(this.routing);
    setTimeout(() => {
      this.location.back();
    });
  }

}