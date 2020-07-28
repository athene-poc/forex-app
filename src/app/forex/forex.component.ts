import { Component, OnInit } from '@angular/core';
import { ForexServiceService } from '../service/forex-service.service';

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css'],
})
export class ForexComponent implements OnInit {
  constructor(private forexService: ForexServiceService) {}

  rates: any;
  
  ngOnInit(): void {
    this.rates = [];
    this.forexService.getForexData().subscribe(
      (data) => {
        this.rates = Object.entries(data['rates']);        
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }
}
