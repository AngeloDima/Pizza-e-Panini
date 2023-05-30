import { Injectable } from '@angular/core';
import { ClassPanino } from '../models/class-panino';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanineriaCenterService {

  listaPanini: ClassPanino[] = [
    {
      nome: "semplice",
      condimenti: "aria e patate",
      prezzo: 6.5
    },

    {
      nome: "complesso",
      condimenti: "ossigeno e metano",
      prezzo: 8.5
    },

    {
      nome: "Dot Accademy",
      condimenti: "patate, carne e Angular",
      prezzo: 12
    },
  ];

  getByNome(nome: string): Observable<ClassPanino> {
    const panino = this.listaPanini.find(panino => panino.nome === nome);
    if (panino) {
      return of(panino);
    } else {
      return new Observable(observer => {
        observer.error('Panino non trovato');
        observer.complete();
      });
    }
  }

  constructor() { }
}
