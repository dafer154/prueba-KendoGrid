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

  personaForm: FormGroup;
  model: PersonaClass;
  submittedModel: PersonaClass;
  submitted = false;
  arrayPersonas: PersonaClass[] = Personas;

  constructor(private formBuilder: FormBuilder) {


   }

   generateId() {
    const ultimateId = Personas.length - 1;
    const idPersona = Personas[ultimateId].id;
    const generatedId: number = idPersona + 1;
    return generatedId;
  }

  ngOnInit() {

    this.model = new PersonaClass(10, 'prueba', 'prueba', 'prueba');

      this.personaForm = this.formBuilder.group({
        id: [this.model.id],
        nombrePersona:     [this.model.nombrePersona, Validators.required],
        telefonoPersona: [this.model.telefonoPersona, Validators.required],
        direccionPersona:    [this.model.direccionPersona, Validators.required]
      });

  }

  onSubmit({ value, valid }: { value: PersonaClass, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
    this.submittedModel['id'] = this.generateId();
    this.arrayPersonas.push(this.submittedModel);
    console.log(this.arrayPersonas);
  }

}
