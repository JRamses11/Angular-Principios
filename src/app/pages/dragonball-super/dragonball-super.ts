import { Component, inject, signal } from "@angular/core";
import { PersonajeListComponent } from "../../components/dragonball/personaje-list";
import { DragonballPersonajeAddComponent } from "../../components/dragonball/dragonball-personaje-add";
import { DragonballService } from "../../services/dragonball.service";

@Component({
    templateUrl: './dragonball-super.html',
    imports: [PersonajeListComponent, DragonballPersonajeAddComponent],
})


export class dragonballSuperPageComponent {
    public dragonballservice= inject(DragonballService);

}


