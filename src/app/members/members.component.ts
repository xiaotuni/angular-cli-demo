import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class MembersComponent implements OnInit {

  obj: object = { id: 1, name: 'liaohaibing', address: '我也不知道这是什么地方了' };
  list: Array<any> = [];

  constructor() {

    for (let i = 0; i < 10; i++) {
      this.list.push({ id: i + 1, name: '这是名称_' + 1, address: '这是地址了——' + i });
    }
  }

  ngOnInit() {
  }

}
