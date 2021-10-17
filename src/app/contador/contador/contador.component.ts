import { Component } from "@angular/core";

@Component({
    selector: 'emma-contador',
    template: `
        <h1> {{ titulo }} </h1>
        <h3>la base es {{ base }}</h3>

        <button (click)="acumular( base )"> + {{ base }} </button>

        <span> {{ numero }} </span>

        <button (click)="acumular( -base )"> - {{ base }} </button>
    `,

})

export class ContadorComponent {
    public titulo: string = 'Contador App';
    public base  : number = 1;
    public numero: number = this.base; 

    acumular = ( valor:number ) => {this.numero += valor;}
};
