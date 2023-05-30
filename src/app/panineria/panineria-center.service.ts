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
    // Altri panini...

  ];

  getByNome(nome: string): Observable<ClassPanino | undefined> {
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

  salvaModifichePanino(panino: ClassPanino): void {
    const index = this.listaPanini.findIndex(p => p.nome === panino.nome);
    if (index !== -1) {
      this.listaPanini[index] = panino;
    }
  }

  addPanino(panino: ClassPanino) {
    this.listaPanini.push(panino)
  }


  constructor() { }
}
