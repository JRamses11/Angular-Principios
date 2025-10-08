import { Component, signal } from "@angular/core";
import { Personaje } from "../../interfaces/personaje.interface";

@Component({
    selector: 'dragonball-personaje-add',
    templateUrl: './dragonball-personaje-add.html',
})
export class DragonballPersonajeAddComponent {
    nombre= signal('');
    poder= signal(0);

    addPersonaje() {
        if((this.nombre() === '') || (this.poder() <= 0)){
            return;
        }
        
        const nuevoPersonaje: Personaje = {
            id: 1000, // Temporal
            nombre: this.nombre(),
            poder: this.poder(),
        };
        // this.personajes.update(personajes => [...personajes, nuevoPersonaje]);
        console.log({nuevoPersonaje});
        this.Limpiar();
    }

    Limpiar() {
        this.nombre.set('');
        this.poder.set(0);
    }
}