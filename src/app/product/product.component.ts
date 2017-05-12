import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

import { Utility } from '../Common/Utility';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [routerTransition(Utility.$GetContent(Utility.$ConstItem.AppIsGoBack))],
  host: { '[@routerTransition]': '' }
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
