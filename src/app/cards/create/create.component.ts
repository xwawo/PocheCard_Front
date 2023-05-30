import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service'; 
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private apiService: ApiService) { }


  createCard(dataform: NgForm) {
    console.warn(JSON.stringify(dataform.value));
    this.apiService.createCard(dataform.value).subscribe((resultat: NgForm)=>{
    console.warn(resultat);   
    }); 
  }

  ngOnInit(): void {
  }

}
