import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  cards: any;
  card: any;

  constructor(private apiService: ApiService) { 
  } 

  ngOnInit(): void {
    this.refreshPage()
  }


  private refreshPage() {
    this.apiService.getAllCardsToSell().subscribe((res: any) => { 
      this.cards=res;
    });
  }


}