import { Component, OnInit } from '@angular/core';
import { Personas } from '../lista-personas/personasData';
import { PersonaClass } from '../classes/persona';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  prueba: PersonaClass[] = Personas;
  //model: PersonaClass;
  //model: any = {};

  model = new PersonaClass(18, 'Dr IQ', 'pruebilla', 'Chuck Overstreet');



  submitted = false;

  /*
  onSubmit() { this.submitted = true; }
  */
  constructor() {
   }

  ngOnInit() {
  }

  generateId() {
    const ultimateId = Personas.length - 1;
    return Personas[ultimateId].id;
  }

  /*

  crearPersona(nombre: HTMLInputElement, telefono: HTMLInputElement, direccion: HTMLInputElement): boolean {
    const ultimatedID = this.generateId();
    const generatedId = ultimatedID + 1;
    this.prueba.push(new PersonaClass(generatedId, nombre.value, telefono.value, direccion.value));

    console.log(this.prueba);


    return false;
  }

  */


  
  crearPersona() {
    const ultimatedID = this.generateId();
    const generatedId = ultimatedID + 1;
    this.model = new PersonaClass(generatedId, '', '' , '');
    this.prueba.push(this.model);
    console.log(this.model);
  }


/*
 onSubmit() {
  const ultimatedID = this.generateId();
  const generatedId = ultimatedID + 1;
  this.prueba.push(this.model);
  console.log(this.model);
}
*/

onSubmit() {
  this.submitted = true;
}



}
