import { Component, OnInit } from '@angular/core';
import { User } from '../common/user'
import { USERS } from '../common/mock-users'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.css', './dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users = USERS;

  constructor() { }

  ngOnInit() {
  }



}


