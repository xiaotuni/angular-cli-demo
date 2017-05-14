import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { Location } from '@angular/common';
import { Utility } from './containers/Core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app works!';
  private __Location: Location;
  constructor(private router: Router, private location: Location) {
    this.__Location = location;
    this.__RouterListen(router);
  }

  __RouterListen(router: Router): void {
    Utility.$SetContent(Utility.$ConstItem.Route, router, false);
    Utility.$SetContent(Utility.$ConstItem.Location, this.__Location, false);

    const __self = this;
    router.events.subscribe((obj: any) => {
      if (obj instanceof RoutesRecognized) {
        const state = obj.state;
        const root = state.root;
        const queryParams = root.queryParams;
        const firstChild = root.firstChild;
        const routeConfig = firstChild.routeConfig;
        const path = routeConfig.path;
        // console.log(path, queryParams);
      }
    });
    window.onpopstate = (a) => {
      // console.log('pop');
      // const __key = Utility.$ConstItem.AppIsGoBack;
      // Utility.$SetContent(__key, true, false);;
      // setTimeout(() => {
      //   Utility.$RemoveContent(__key, false);
      // }, 650);
    };
    // router.events.changes(() => { });
    // router.subscribe((item) => { });
  }
  __GoBack() {
    Utility.$GoBack();
  }
}
