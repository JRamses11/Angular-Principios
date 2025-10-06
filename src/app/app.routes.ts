import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page';
import { HeroPageComponent } from './pages/hero/hero-page';
import { dragonballPageComponent } from './pages/dragonball/dragonball';

export const routes: Routes = [
    {
        path: '',
        component: CounterPageComponent
    },
    {
        path: 'hero',
        component: HeroPageComponent
    },
    {
        path: 'dragonball',
        component: dragonballPageComponent

    }
];
