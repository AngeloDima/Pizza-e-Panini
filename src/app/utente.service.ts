import { Injectable } from '@angular/core';
import { Utente } from './utente';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  listaUtenti: Utente[] = [
    {
      nome: "Dario",
      role: "professore"
    },

    {
      nome: "Angelo",
      role: "Studene"
    }
  ]

  constructor() { }
}
