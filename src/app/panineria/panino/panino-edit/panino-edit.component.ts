import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassPanino } from 'src/app/models/class-panino';
import { PanineriaCenterService } from '../../panineria-center.service';


@Component({
  selector: 'app-panino-edit',
  templateUrl: './panino-edit.component.html',
  styleUrls: ['./panino-edit.component.scss']
})
export class PaninoEditComponent implements OnInit {

  editPanino: ClassPanino;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ciao: PanineriaCenterService
  ) { }

  ngOnInit(): void {
    const nome = this.route.snapshot.paramMap.get('nome');
    if (nome) {
      this.ciao.getByNome(nome).subscribe(
        editPanino => this.editPanino = editPanino,
        error => console.error(error)
      );
    }
  }


  salvaModifiche(): void {
    if (this.editPanino) {
      this.ciao.salvaModifichePanino(this.editPanino);
      this.router.navigate(['/panineria']);
    }
  }
}



