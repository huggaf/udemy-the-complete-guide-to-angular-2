import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];

  constructor(private service: UsersService){}

  ngOnInit(){
    this.users = this.service.inactiveUsers;
  }

  onActivate(index){
    this.service.activate(index);
  }

}
