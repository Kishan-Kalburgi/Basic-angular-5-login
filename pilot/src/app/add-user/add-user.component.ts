import { Component, OnInit } from '@angular/core';
import { User } from '../common/user'
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['../app.component.css', './add-user.component.css']
  // styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User;
  gender: any[];

  constructor(private router:Router) { 
    this.gender = ['Male', 'Female', 'Others'];
      this.user = new User({
        firstName: '', 
        lastName: '',
        email: '',
        gender: this.gender[0],
        profileImage: '',
        dob: '',
        status: ''});

  } 

  ngOnInit() {
  }

  onFormSubmit({ value, valid}: { value: User, valid: boolean }) {
    this.user = value;
    console.log( this.user);
    console.log('valid: ' + valid);
    this.router.navigate(['/users'])
  }
}
