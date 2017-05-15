import { Component, OnInit } from '@angular/core';
import { Utility } from '../Core';
import { routeAnimation } from '../app.animations';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routeAnimation]
})
export class HomeComponent extends BaseComponent implements OnInit {


  ngOnInit() {
  }

}
