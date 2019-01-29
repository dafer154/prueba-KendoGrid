import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {

    

    this.regresaObservable().subscribe(
      numero => console.log("subs", numero),
      error => console.error("Error"),
      () => console.log("el observador termino")
    );

   }

  ngOnInit() {
  }

  regresaObservable(): Observable<any> {

    return new Observable((observer: Subscriber<any>)  => {
      
      let contador = 0;

      let intervalo = setInterval(() => {
        
        contador ++;
        const salida = {
          valor: contador
        };

        observer.next(salida);

        if (contador === 3){
          clearInterval(intervalo);
          observer.complete();
        }

      }, 1000);
    }).pipe(
      map( resp => {
        return resp.valor;
      }), filter((valor, index) => {
        if ((valor % 2) === 1) {
          return true;
        } else {
          return false;
        }
      })
    );
  }


}
