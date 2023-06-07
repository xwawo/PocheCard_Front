import {Component, OnInit} from '@angular/core';
import {User} from "../models/User";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiService} from "../services/api.service";
import {UserService} from '../services/user.service';
import {AuthService} from "../services/auth-service";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})



export class UserProfileComponent implements OnInit {

  isLogged: boolean
  loginData : {username : String, password : String}
  user: User = new User('', '', '', '', '', 0.0); // Initialize a User object with empty strings
  public repeatPassword: string;

  constructor(
      private http: HttpClient,
      private apiService: ApiService,
      private authService: AuthService,
      private userService: UserService
  ) {
    this.isLogged = false;
  }

  ngOnInit() {
    this.loginData = {username : '', password : ''}
  }

  registerUser() {
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
        delete this.user['account'];
        this.apiService.registerUser(this.user).subscribe(
            (response) => {
              alert('User created successfully')
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
    if (this.loginData.username && this.loginData.password) {
      // Login logic
      this.apiService.loginUser(this.loginData.username, this.loginData.password).subscribe(
          (response ) => {
           if (response) {
             this.isLogged = true;
             console.log("User logged in",response);
             alert('User logged in successfully')
             this.user = response.user as unknown as User;
             this.userService.setUser(this.user);
             this.authService.setJWTtoken(response.token);
           }
              else {
                console.log("User not logged in", response);
                alert('User not found, try different credentials')
           }
          }
      )
    }
    else {
      alert('Please fill in all fields');
      // Handle the case when any required field is empty
    }

  }
}

