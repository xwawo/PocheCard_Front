import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any; // Modify the type as per your user data structure

  getUser(): any {
    return this.user;
  }

  setUser(user: any): void {
    this.user = user;
  }
}
