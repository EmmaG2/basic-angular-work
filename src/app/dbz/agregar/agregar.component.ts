import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {

  @Input() nuevo:Personaje = {
    nombre: '', 
    poder: 0
  }

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return; }

    console.log( this.nuevo );
    this.onNuevoPersonaje.emit( this.nuevo )

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}