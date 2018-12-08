import { Component, OnInit } from '@angular/core';
import { Personas } from '../lista-personas/personasData';
import { PersonaClass } from '../classes/persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  prueba: PersonaClass[] = Personas;

  constructor() {
   }

  ngOnInit() {
  }

  generateId() {
    const ultimateId = Personas.length - 1;
    return Personas[ultimateId].id;
  }

  crearPersona(nombre: HTMLInputElement, telefono: HTMLInputElement, direccion: HTMLInputElement): boolean {
    const ultimatedID = this.generateId();
    const generatedId = ultimatedID + 1;
    this.prueba.push(new PersonaClass(generatedId, nombre.value, telefono.value, direccion.value));

    console.log(this.prueba);


    return false;
  }



}
