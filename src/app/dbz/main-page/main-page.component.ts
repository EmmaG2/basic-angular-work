import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {

  personajes: Array<Personaje> = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'vegeta',
      poder: 2000
    }
  ];

  nuevo:Personaje = {
    nombre: '', 
    poder: 0
  };

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return; }

    console.log( this.nuevo );

    this.personajes.push(this.nuevo)
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
};
