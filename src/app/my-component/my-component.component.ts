import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

import { Utility } from '../Common/Utility';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  animations: [routerTransition(Utility.$GetContent(Utility.$ConstItem.AppIsGoBack))],
  host: { '[@routerTransition]': '' }
})
export class MyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
