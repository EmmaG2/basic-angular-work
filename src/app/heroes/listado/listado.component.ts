import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: Array<string> = ['Ironman','Hulk','arrow','thor','linterna verde'];
  heroeBorrado: string = '';

    borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
    }


}
