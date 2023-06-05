import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  portalName: string;
  courses: string[] = [];

  constructor(private cursosService: CursosService) {
    this.portalName = "https://livramento.dev";
    
    this.courses = this.cursosService.getCursos();
  }

}
