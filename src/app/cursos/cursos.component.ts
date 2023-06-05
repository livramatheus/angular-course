import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  portalName: string;
  courses: string[] = ["Java", "Ext JS", "Angular"];

  constructor() {
    this.portalName = "https://livramento.dev"
  }

}
