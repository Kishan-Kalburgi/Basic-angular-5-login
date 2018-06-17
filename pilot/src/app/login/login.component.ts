import { Component, OnInit } from '@angular/core';
import { User } from '../common/user';
import { Router } from '@angular/router'
import { FormsModule }   from '@angular/forms';
import { DataService } from '../common/dataService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css', './login.component.css']
})

export class LoginComponent implements OnInit {

  user: User;

  isSubmitted = false;

  constructor(private router:Router, private dataService: DataService) { 
    this.user = new User({
      email: ''})
}

  ngOnInit() {
  }

  onLogin({ value, valid }: { value: User, valid: boolean })  {
    console.log(value)
    console.log(valid)
    this.isSubmitted = true;
    if(value){
      console.log(value)
      this.dataService.signInUser(value)
      .subscribe((data) =>{
        console.log(data)
        console.log("success")
        this.router.navigate(['/users'])
      },
      error=>{
        console.log("Error Occured")
        alert("Invalid EmailId/Password")
      });



      
    }
    
  }
}
