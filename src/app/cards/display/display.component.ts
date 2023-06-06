import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  cards: any;
  card: any;

  constructor(private apiService: ApiService) { 
  } 

  ngOnInit(): void {
    this.refreshPage()
  }

  public getCard(data: any) {
    this.card = data;
  }

  public updateCard(card: NgForm) {
    console.warn(JSON.stringify(card.value));
    this.apiService.update(card.value).subscribe((res: NgForm) => { 
      this.refreshPage()
    });
  }

  public venteCard(vendu: NgForm) {
    console.warn(JSON.stringify(vendu.value));
    this.apiService.venteCard(vendu.value).subscribe((res: NgForm) => { 
    });
  }

  public ondelete(id: number) {
    this.apiService.getCardById(id).subscribe((res: any)=>{  
      this.refreshPage()
    }); 
  }

  private refreshPage() {
    this.apiService.getCards().subscribe((res: any) => { 
      this.cards=res;
    });
  }

  

}