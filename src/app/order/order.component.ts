import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Ifood } from '../ifood';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  //We create an empty array that looks like Ifood
order:Ifood[] = [];
total:number=0;


//we use OnInit and service to get the cart and calculate the total
  constructor(private OS: OrderService){}

  ngOnInit(): void {
    this.order = this.OS.getCart();
    this.total = this.OS.calcTotal();
}
discount:number=15;
serviceTip:number=10;


//if/else statement for the discount

discountTotal(): number{
  if (this.total>40) {
    return this.total = this.total*1-(this.discount/100)
  } else {
    return this.total
    
  }

      
}

}
