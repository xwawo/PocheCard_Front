import { Component, OnInit } from '@angular/core';
import {User} from "../models/User";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiService} from "../api/api.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})



export class UserProfileComponent implements OnInit {

  isLogged: boolean
  loginData : {username : String, password : String}
  user: User = new User('', '', '', '', ''); // Initialize a User object with empty strings
  public repeatPassword: string;

  constructor(
      private http: HttpClient,
      private apiService: ApiService
  ) {
    this.isLogged = false;
  }

  ngOnInit() {
    this.loginData = {username : '', password : ''}
  }

  registerUser() {
    const optionRequete = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'responseType': 'json'
      })
    }
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
        this.apiService.registerUser(this.user).subscribe(
            (response) => {
              this.isLogged = true;
              console.log(response);
            }
        )
        // You can perform further actions like making an API call to register the user
      } else {
        alert('Passwords do not match');
        // Handle the case when passwords do not match
      }
    } else {
      alert('Please fill in all fields');
      // Handle the case when any required field is empty
    }
  }

  login() {
    const optionRequete = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'responseType': 'json'
      })
    }
    const queryParams = `?username=${this.user.login}&password=${this.user.pwd}`;
    if (this.user.login && this.user.pwd) {
      // Login logic
      this.apiService.loginUser(this.loginData.username, this.loginData.password).subscribe(
          (response ) => {
           if (response as unknown as boolean === true) {
             this.isLogged = true;
             console.log("User logged in");
           }
          }
      )
      this.isLogged = true;
    }
    else {
      alert('Please fill in all fields');
      // Handle the case when any required field is empty
    }

  }
}

