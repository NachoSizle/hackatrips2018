import { NgModule } from '@angular/core';
import { ToolbarEncontrarComponent } from './toolbar-encontrar/toolbar-encontrar';
import { EncontrarMapComponent } from './encontrar-map/encontrar-map';
import { ToolbarAgendaComponent } from './toolbar-agenda/toolbar-agenda';
import { CardAgendaComponent } from './card-agenda/card-agenda';
import { CardRestaurantComponent } from './card-restaurant/card-restaurant';
import { EncontrarListaComponent } from './encontrar-lista/encontrar-lista';
@NgModule({
	declarations: [ToolbarEncontrarComponent,
    EncontrarMapComponent,
    ToolbarAgendaComponent,
    CardAgendaComponent,
    CardRestaurantComponent,
    EncontrarListaComponent],
	imports: [],
	exports: [ToolbarEncontrarComponent,
    EncontrarMapComponent,
    ToolbarAgendaComponent,
    CardAgendaComponent,
    CardRestaurantComponent,
    EncontrarListaComponent]
})
export class ComponentsModule {}
