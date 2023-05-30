import { Injectable } from '@angular/core';
import { ClassePizza } from './classe-pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaCenterService {

  pizze: ClassePizza[] = [
    {
      nome: "margherita",
      ingredienti: "tanto amore",
      prezzo: 4
    },

    {
      nome: "viennese",
      ingredienti: "tanti wurstel",
      prezzo: 7
    },

    {
      nome: "pizza elegantissima",
      ingredienti: "pomodoro e aria",
      prezzo: 5.5
    },
  ]


  constructor() { }
}
