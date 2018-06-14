import { Component, OnInit } from '@angular/core';
import { User } from '../common/user';
import { Router } from '@angular/router'
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css', './login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  saveEvent(event) {
    // this.eventService.saveEvent(event)
    this.router.navigate(['/users'])
  }
}
