import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
