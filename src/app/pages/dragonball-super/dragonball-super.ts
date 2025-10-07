import { Component, signal } from "@angular/core";

interface Personaje {
    id: number;
    nombre: string;
    poder: number;
}

@Component({
    templateUrl: './dragonball-super.html',
})


export class dragonballSuperPageComponent {

    nombre =signal('');
    poder= signal(0);

    personajes = signal<Personaje[]>([
        { id: 1, nombre: 'Goku', poder: 9001 },
        { id: 2, nombre: 'Vegeta', poder: 8000 },
    ]);

    addPersonaje() {
        if((this.nombre() === '') || (this.poder() <= 0)){
            return;
        }
        
        const nuevoPersonaje: Personaje = {
            id: this.personajes().length + 1,
            nombre: this.nombre(),
            poder: this.poder(),
        };
        this.personajes.update(personajes => [...personajes, nuevoPersonaje]);
        this.Limpiar();
        console.log(this.nombre(), this.poder());
    }

    Limpiar() {
        this.nombre.set('');
        this.poder.set(0);
    }

}


