import { Component } from '@angular/core';
import { ClassePizza } from './classe-pizza';
import { PizzaCenterService } from './pizza-center.service';

@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.scss']
})
export class PizzeriaComponent {

  listaPizze: ClassePizza[] = []
  constructor(private pizServ: PizzaCenterService) {
    this.listaPizze = this.pizServ.pizze
  }

}
