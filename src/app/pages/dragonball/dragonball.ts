import { Component, computed, signal } from "@angular/core";
// import { NgClass } from "@angular/common";
interface Personaje {
    id: number;
    nombre: string;
    poder: number;
}

@Component({
    templateUrl: './dragonball.html',
    // imports: [NgClass]
})


export class dragonballPageComponent {

    personajes = signal<Personaje[]>([
        { id: 1, nombre: 'Goku', poder: 9001 },
        { id: 2, nombre: 'Vegeta', poder: 8000 },
        { id: 3, nombre: 'Krillin', poder: 3000 },
        { id: 4, nombre: 'Piccolo', poder: 200 },
    ]);

    // clasePoder = computed(() => {
    //     return {
    //         'text-danger': true,
    //     }
    // })
}


