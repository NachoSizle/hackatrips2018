import { NgModule } from '@angular/core';
import { ToolbarEncontrarComponent } from './toolbar-encontrar/toolbar-encontrar';
import { EncontrarMapComponent } from './encontrar-map/encontrar-map';
import { ToolbarAgendaComponent } from './toolbar-agenda/toolbar-agenda';
import { CardAgendaComponent } from './card-agenda/card-agenda';
import { CardRestaurantComponent } from './card-restaurant/card-restaurant';
@NgModule({
	declarations: [ToolbarEncontrarComponent,
    EncontrarMapComponent,
    ToolbarAgendaComponent,
    CardAgendaComponent,
    CardRestaurantComponent],
	imports: [],
	exports: [ToolbarEncontrarComponent,
    EncontrarMapComponent,
    ToolbarAgendaComponent,
    CardAgendaComponent,
    CardRestaurantComponent]
})
export class ComponentsModule {}
