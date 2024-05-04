import { Component } from '@angular/core';
import { Ifood } from '../ifood';
import { food } from '../food';
import { OrderService } from '../order.service';

//import { OrderService } from '../order.service';
//import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  menuArr: Ifood[] = food; //menuArr: is a class we created to call in the html

  value: Ifood = {} as Ifood;

  constructor(private OS: OrderService) {}

  addToCart(value: Ifood) {
    alert('Item added to your order');
    this.OS.addTocart(value);
  }
}
//Here we export the array of objects we have created in the ifood.ts and food.ts files
