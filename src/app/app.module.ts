import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Forms in Angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//App store with reducers
import { StoreModule } from '@ngrx/store';
import { reducer } from '../reducers/tutorial.reducer';

import { AppComponent } from './app.component';
import { ListaPersonasComponent } from './pages/lista-personas/lista-personas.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonasComponent } from './pages/personas/personas.component';
import { ReadComponent } from './pages/read/read.component';
import { CreateComponent } from './pages/create/create.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaPersonasComponent,
    PersonasComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      tutorial: reducer
    }),
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
