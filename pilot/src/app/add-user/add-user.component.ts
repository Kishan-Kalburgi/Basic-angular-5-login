import { Component, OnInit } from '@angular/core';
import { User } from '../common/user'
import { Router } from '@angular/router'
import { DataService } from '../common/dataService';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['../app.component.css', './add-user.component.css']
  // styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User;
  gender: any[];
  status: any[];
  isSubmitted = false
  constructor(private dataService: DataService) {
    this.gender = ['Male', 'Female', 'Other'];
    this.status = ['ACTIVE', 'INACTIVE'];
    this.user = new User({
      firstName: '',
      lastName: '',
      email: '',
      gender: this.gender[0],
      profileImage: '',
      dob: '',
      status: this.status[0]
    });
  }

  ngOnInit() {
  }

  stringify(item) {
    return JSON.stringify(item)
  }

  onFormSubmit({ value, valid }: { value: User, valid: boolean }) {
      this.isSubmitted = true
      this.user = value;
      // console.log(this.user);
      // console.log('valid: ' + valid);
      if(valid){
        this.user = value;
      console.log(this.user);
      console.log('valid: ' + valid);
      this.dataService.saveUser(this.user)
      .subscribe((data) =>{
        console.log(data)
        console.log("success")
      },
      error=>{
        console.log("Error Occured")
      });

   //   this.router.navigate(['/users'])
      }
      
   
  }
}
