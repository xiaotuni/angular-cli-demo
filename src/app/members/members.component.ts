import { Component, OnInit } from '@angular/core';
import { Utility } from '../Common/Utility';
import { routeAnimation } from '../app.animations';
import { AnimationService } from '../app.animation.service';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  animations: [routeAnimation]
})
export class MembersComponent extends BaseComponent implements OnInit {
  title = "成员组件";


  ngOnInit(): void {

  }
}
