import { Component, OnInit } from '@angular/core';
import { ClassPanino } from 'src/app/models/class-panino';
import { PanineriaCenterService } from '../panineria-center.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-panino',
  templateUrl: './panino.component.html',
  styleUrls: ['./panino.component.scss']
})
export class PaninoComponent implements OnInit {

  dettaglio?: ClassPanino;

  constructor(
    private detServ: PanineriaCenterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const nome = this.route.snapshot.paramMap.get('nome');
    if (nome) {
      this.detServ.getByNome(nome).subscribe(
        dettaglio => this.dettaglio = dettaglio,
        error => console.error(error)
      );
    }
  }
}
