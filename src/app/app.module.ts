import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Forms in Angular
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListaPersonasComponent } from './pages/lista-personas/lista-personas.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonasComponent } from './pages/personas/personas.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaPersonasComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GridModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
