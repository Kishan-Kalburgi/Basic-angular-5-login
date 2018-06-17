import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) { }
    getUserList() {
        //   http call
        return this.http.get("https://pilot-project-api-gdp.herokuapp.com/api/user/getUsersList");
    }

    saveUser(data: User) {
        //   http call
        return this.http.post("https://pilot-project-api-gdp.herokuapp.com/api/user/signup", data);
    }

    signInUser(data: User) {
        //   http call
        return this.http.post("https://pilot-project-api-gdp.herokuapp.com/api/user/signin", data);
    }
}