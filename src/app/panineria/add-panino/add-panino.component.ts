import { Component } from '@angular/core';
import { ClassPanino } from 'src/app/models/class-panino';
import { PanineriaCenterService } from '../panineria-center.service';

@Component({
  selector: 'app-add-panino',
  templateUrl: './add-panino.component.html',
  styleUrls: ['./add-panino.component.scss']
})
export class AddPaninoComponent {

  listaPanini: ClassPanino[] = []

  constructor(private panServ: PanineriaCenterService) { }

  nomePanino: string = ""
  condimentiPanino: string = ""
  prezzoPanino: number = 0
  messaggio: string = ""


  createPanino() {
    const newPanino = new ClassPanino(this.nomePanino, this.condimentiPanino, this.prezzoPanino)
    this.panServ.addPanino(newPanino)
    this.messaggio = "Panino creato"
  }
}




