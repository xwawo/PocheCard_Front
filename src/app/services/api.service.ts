import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {User} from "../models/User";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiBaseUrl = 'http://localhost:80/api';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',    
      'Content-Type': 'application/json, Access-Control-Allow-Origin'
    }),
  };


  //------------ METHOD GET -----------//

  getCards(): Observable<getCards> {
    return this.http.get<getCards>(this.apiBaseUrl+ '/cards');
  }

  getAllCardsToSell(): Observable<CardsToSell> {
    return this.http.get<CardsToSell>(this.apiBaseUrl+ '/stores/orders');   
  }

  //------------ METHOD DELETE -----------//

  getCardById(id: number): Observable<deleteCard> {
    return this.http.delete<deleteCard>(this.apiBaseUrl+ '/cards/'+ id, this.httpOptions); 
  }


  //------------ METHOD PUT -----------//

  update(data: NgForm): Observable<NgForm> {  
    return this.http.put<NgForm>(this.apiBaseUrl + '/cards', data, this.httpOptions); 
  }


  //------------ METHOD POST -----------//

  createCard(data: NgForm): Observable<NgForm> {  
    return this.http.post<NgForm>(this.apiBaseUrl + '/cards', data);  
  }

  registerUser(data: User): Observable<any[]> {
    const optionRequete = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'responseType': 'json'
      })
    }
    return this.http.post<any[]>(this.apiBaseUrl+ '/users',data, optionRequete)
  }

  loginUser(username : String, password : String): Observable<any> {
    return this.http.post<any[]>(this.apiBaseUrl+ "/users/auth/"+ username +'/'+ password, this.httpOptions); 
  }

  venteCard(data: NgForm): Observable<NgForm> {  
    return this.http.post<NgForm>(this.apiBaseUrl+ '/stores/sell', data);  
  }


}

//------------ INTERFACES -----------//

export interface getCards {
  
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

export interface CardsToSell {
  
  id: number;
  userId: number;
	cardId: number;
	price: number;
  
}
