import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class MyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
