import { Component, OnInit } from '@angular/core';
import {User} from "../models/User";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})



export class UserProfileComponent implements OnInit {

  private isLogged: boolean
  user: User = new User('', '', '', '', ''); // Initialize a User object with empty strings
  public repeatPassword: string;

  constructor(
      private http: HttpClient
  ) {
        this.isLogged = false;
  }

  ngOnInit() {
  }

  registerUser() {
    const optionRequete = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'responseType': 'json'
      })
    }
    const url = 'https://api.example.com/endpoint';
    console.log(this.user);
    if (
        this.user.login &&
        this.user.email &&
        this.user.firstName &&
        this.user.lastName &&
        this.user.pwd
    ) {
      // Check if the passwords match
      if (this.user.pwd === this.repeatPassword) {
        // Registration logic
        this.http.post<any[]>('http://localhost:8080/user',this.user, optionRequete).subscribe(
            (response) => {
              this.http.get('http://localhost:8080/user/all', optionRequete).subscribe(
                    (response) => {
                      console.log(response);
                    }
              );
            }
        )
        // You can perform further actions like making an API call to register the user
      } else {
        console.log('Passwords do not match');
        // Handle the case when passwords do not match
      }
    } else {
      console.log('Please fill in all fields');
      // Handle the case when any required field is empty
    }
  }
    login() {

        this.isLogged = true;
    }

}
