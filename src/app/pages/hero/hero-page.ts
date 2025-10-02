import { Component, signal } from '@angular/core';

@Component({
    templateUrl: './hero-page.html',
})

export class HeroPageComponent {
    name = signal('Ironman');
    age = signal(45);

    getHeroDescription() {
        return `${this.name()} - ${this.age()} años`;
    }

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
