import { Component } from '@angular/core';
import { ClassPanino } from 'src/app/models/class-panino';
import { PanineriaCenterService } from '../panineria-center.service';

@Component({
  selector: 'app-panini',
  templateUrl: './panini.component.html',
  styleUrls: ['./panini.component.scss']
})
export class PaniniComponent {

  listaPanini: ClassPanino[] = []
  constructor(private panServ: PanineriaCenterService) {
    this.listaPanini = this.panServ.listaPanini
  }



}



