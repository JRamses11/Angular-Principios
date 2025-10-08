import { Component, signal } from "@angular/core";
import { PersonajeListComponent } from "../../components/dragonball/personaje-list";
import { DragonballPersonajeAddComponent } from "../../components/dragonball/dragonball-personaje-add";
import { Personaje } from "../../interfaces/personaje.interface";

@Component({
    templateUrl: './dragonball-super.html',
    imports: [PersonajeListComponent, DragonballPersonajeAddComponent],
})


export class dragonballSuperPageComponent {

    nombre =signal('');
    poder= signal(0);

    personajes = signal<Personaje[]>([
        { id: 1, nombre: 'Goku', poder: 9001 },
        { id: 2, nombre: 'Vegeta', poder: 8000 },
    ]);

    addPersonaje( nuevoPersonaje: Personaje ) {
        this.personajes.update( personajes => [...personajes, nuevoPersonaje] );
    }

}


