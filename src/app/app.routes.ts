import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page';
import { HeroPageComponent } from './pages/hero/hero-page';
import { dragonballPageComponent } from './pages/dragonball/dragonball';
import { dragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super';

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
    },
    {
        path: 'dragonball-super',
        component: dragonballSuperPageComponent
    }
];
