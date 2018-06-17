import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) { }
    getUserList() {
        //   http call
        return this.http.get("https://pilot-project-api-gdp.herokuapp.com/api/user/getUsersList");
    }
}