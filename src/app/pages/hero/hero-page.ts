import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
    templateUrl: './hero-page.html',
    imports: [UpperCasePipe],
})

export class HeroPageComponent {
    name = signal('Ironman');
    age = signal(45);

    heroDescription= computed(() => {
        const descripcion = `${this.name()} - ${this.age()} años`;
        return descripcion;
    });

    CapitalizedName = computed(() => this.name().toUpperCase());

    changeHero() {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    resetForm(){
        this.name.set('ironman');
        this.age.set(45);
    }

    changeAge(){
        this.age.set(60);
    }

    getCapitalizedName(): string {
        return this.name().toUpperCase();
    }
}
