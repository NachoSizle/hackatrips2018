import { NgModule } from '@angular/core';
import { ToolbarEncontrarComponent } from './toolbar-encontrar/toolbar-encontrar';
import { EncontrarMapComponent } from './encontrar-map/encontrar-map';
@NgModule({
	declarations: [ToolbarEncontrarComponent,
    EncontrarMapComponent],
	imports: [],
	exports: [ToolbarEncontrarComponent,
    EncontrarMapComponent]
})
export class ComponentsModule {}
