import { Injectable, signal } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})

export class DragonballService {

     personajes = signal<Personaje[]>([
        { id: 1, nombre: 'Goku', poder: 9001 },
        { id: 2, nombre: 'Vegeta', poder: 8000 },
    ]);

    addPersonaje( nuevoPersonaje: Personaje ) {
        this.personajes.update( personajes => [...personajes, nuevoPersonaje] );
    }
}
