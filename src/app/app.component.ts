import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Alejandro';
  name2: string = 'alejAndro soTo';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number = 0.235;
  moneda: number = 12345;
  fecha = new Date();
  activar: boolean = true;
  hero = {
    name: 'logan',
    clave: 'Wolverine',
    age: '500',
    adress: {
      street: 'Primera',
      house: 20
    }
  };
  vidioUrl: string = 'https://www.youtube.com/embed/S0tltAWkfLA';

  valuePromise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });
}
