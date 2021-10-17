import { Component } from "@angular/core";

@Component({ 
    selector: 'app-hero',
    templateUrl: 'heroe.component.html'
})


export class HeroeComponent {
    public title : string = 'Heroe';
    public nombre: string = 'Ironman';
    public edad  : number = 34;

    public get nombreCapitalizado (): string{ 
        return this.nombre.toUpperCase();
    }
    
    public obtenerNombre(): string {
        return `${ this.nombre } - ${this.edad}`
    }

    public cambiarNombre():void {
        this.nombre = 'Spiderman';
    }

    public cambiarEdad():void {
        this.edad = 23;
    }
}