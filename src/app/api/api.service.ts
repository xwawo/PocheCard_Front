import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from '../models/Card';
import {NgForm} from '@angular/forms';
import {User} from "../models/User";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiBaseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:8080',    // '*',
      'Content-Type': 'application/json, Access-Control-Allow-Origin'
    }),
  };


  //------------ METHOD GET -----------//

  getCards(): Observable<getApiCards> {
    return this.http.get<getApiCards>(this.apiBaseUrl+ '/card/all');
  }

  getCardById(id: number): Observable<deleteCard> {
    return this.http.delete<deleteCard>(this.apiBaseUrl+ '/card/'+ id, this.httpOptions); // 
  }

  //------------ METHOD POST -----------//

  createCard(data: NgForm): Observable<NgForm> {  
    return this.http.post<NgForm>(this.apiBaseUrl + '/card', data);  // , this.httpOptions
  }

  registerUser(data: User): Observable<any[]> {
    const optionRequete = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'responseType': 'json'
      })
    }
    return this.http.post<any[]>('http://localhost:8080/user',data, optionRequete)
  }

  loginUser(username : String, password : String): Observable<any> {
    return this.http.get<any[]>("http://localhost:8080/user/auth/" + username +'/'+ password, this.httpOptions);  // , this.httpOptions
  }


}

//------------ INTERFACES -----------//

export interface getApiCards {
  
  id: number;
  name: String;
  description: String;
  family: String;
  affinity: String;
  imgUrl: String;
  smallImgUrl: String;
  energy: number;
  hp:number;
  defense: number;
  attack: number;
  userId: number;

}

export interface deleteCard {
  
  id: number;
  
}
