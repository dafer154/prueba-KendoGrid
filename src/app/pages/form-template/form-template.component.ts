import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form) {
    border: 1px solid red;
  }
  `]
})
export class FormTemplateComponent implements OnInit {


  usuario: Object = {
    nombre: null,
    apellido: null,
    email: null
  };

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log("formulario posteado");
    console.log("form", forma);
    console.log( "Valor", forma.value);

    console.log("usuario", this.usuario);
  }

}
