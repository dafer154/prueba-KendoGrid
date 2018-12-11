
/*

export class PersonaClass {
    id: number;
    nombrePersona: string;
    telefonoPersona: string;
    direccionPersona: string;


constructor(id: number, nombrePersona: string, telefonoPersona: string, direccionPersona: string){
  this.id = id;
  this.nombrePersona = nombrePersona;
  this.telefonoPersona = telefonoPersona;
  this.direccionPersona = direccionPersona;
  }
}
*/



export class PersonaClass {

  constructor(
    public id?: number,
    public nombrePersona?: string,
    public telefonoPersona?: string,
    public direccionPersona?: string
  ) {  }

}

