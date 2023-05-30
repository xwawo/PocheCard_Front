import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  cards: any;

  constructor(private apiService: ApiService) { 
  } 

  ngOnInit(): void {

    this.apiService.getCards().subscribe((res: any) => { 
      this.cards=res;

    } );
  }

}
