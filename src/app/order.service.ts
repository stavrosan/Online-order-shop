import { Injectable } from '@angular/core';
import { Ifood } from './ifood';

@Injectable({
  providedIn: 'root'
})
//We create empty array to use later
export class OrderService {
  cart:Array<Ifood> = [];

  constructor() { }

  addTocart(obj:Ifood){
    this.cart.push(obj);
  }
//add to cart function, get cart and calculation of total
  getCart(){
    return this.cart;
  }

  calcTotal(){
    let total:number=0;

    this.cart.forEach((val) =>{
    total+=val.price;
  })
  return total;
}
}
