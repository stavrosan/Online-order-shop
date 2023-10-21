import { Component} from '@angular/core';
import { Ifood } from '../ifood';
import { food } from '../food';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {
menuArr: Ifood[] = food;        //menuArr: is a class we created to call in the html 



    
  }

      
//Here we export the array of objects we have created in the ifood.ts and food.ts files

