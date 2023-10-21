import { Component, OnInit } from '@angular/core';
import { Ifood } from '../ifood';
import { ActivatedRoute, Params } from '@angular/router';
import { food } from '../food';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
food: Ifood = {} as Ifood;
id:number=0;                  

//we use OnInit and activated route and parameters
//I prepare the property of index when I go to the pr-details

constructor (private route:ActivatedRoute, private OS:OrderService){}

//addtocart fuction with alert
addToCart(){
  alert("Item added to your order");
  this.OS.addTocart(this.food);
}

//Event to trigger the component every time we enter the component. We grab the value from the url
  ngOnInit(): void {
    this.route.params.subscribe((param:Params) => {
    this.id = +param["id"];
    this.food = food[this.id];
  
    })
    
  }
}
