import { Component } from '@angular/core';

import { AgendaPage } from '../agenda/agenda';
import { EncontrarPage } from '../encontrar/encontrar';
import { OfertasPage } from '../ofertas/ofertas';
import { ReservasPage } from '../reservas/reservas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AgendaPage;
  tab2Root = EncontrarPage;
  tab3Root = OfertasPage;
  tab4Root = ReservasPage;

  constructor() {

  }
}
