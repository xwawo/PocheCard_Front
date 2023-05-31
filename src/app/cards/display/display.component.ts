import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


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

    this.apiService.getCards().subscribe((res: any) => { 
      this.cards=res;

    } );
  }

  public getCard(data: any) {
    this.card = data;
  }

  public ondelete(id: number) {
    console.warn(JSON.stringify(id));
    this.apiService.getCardById(id).subscribe((res: any)=>{
      console.warn(res);   
      }); 
  }

  

}
