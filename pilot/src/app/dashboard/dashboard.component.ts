import { Component, OnInit } from '@angular/core';
import { User } from '../common/user'
import { DataService } from '../common/dataService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.css', './dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: User[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUserList()
      .subscribe((data) =>{
        
        this.users = data['data'];
      });
  }



}


