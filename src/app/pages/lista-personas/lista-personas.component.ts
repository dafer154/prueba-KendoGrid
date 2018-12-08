import { Component, OnInit} from '@angular/core';
import { Personas } from './personasData';
import { PersonaClass } from '../classes/persona';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  constructor() { }

  gridData: PersonaClass[] = Personas;
  resultados: PersonaClass[];
  showResultado = false;
  tabla = true;


  ngOnInit() {
    console.log(this.gridData);
  }


  buscarPersona($event) {
    const query = $event.target.value;
    console.log(query);
    if (!query) {
      console.log(this.gridData);
      return this.gridData;
    }
    this.resultados = this.gridData.filter(function (person)  {
        if (person.nombrePersona.indexOf(query) >= 0) {
          console.log(person);
          return person;
        } else {
          return false;
        }
    });
  }
}

