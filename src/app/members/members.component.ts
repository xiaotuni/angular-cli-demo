import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  obj = { id: 1, name: 'liaohaibing', address: '我也不知道这是什么地方了' };

  constructor() { }

  ngOnInit() {
  }

}
