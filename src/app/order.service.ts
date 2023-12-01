import { Injectable } from '@angular/core';
import { Ifood } from './ifood';
import { food } from './food';

@Injectable({
  providedIn: 'root'
})
//We create empty array to use later
export class OrderService {
  cart:Array<Ifood> = [];

 qtty:number=0;

  constructor() { }



   addTocart(obj:Ifood){

 if (this.cart.find((item) => item.name == obj.name)) {
 obj.qtty++
 } else {
  this.cart.push(obj);
    }
    
    }


//add to cart function, get cart and calculation of total
  getCart(){
    return this.cart;
  }

  calcTotal(){
    let total:number=0;

    this.cart.forEach((val) =>{
    total+=val.price*val.qtty;
  })
  return total;
}
}
