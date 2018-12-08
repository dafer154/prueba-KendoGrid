import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    GridModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
