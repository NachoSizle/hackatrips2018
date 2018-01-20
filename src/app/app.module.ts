import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AgendaPage } from '../pages/agenda/agenda';
import { ChatbotPage } from '../pages/chatbot/chatbot';
import { EncontrarPage } from '../pages/encontrar/encontrar';
import { OfertasPage } from '../pages/ofertas/ofertas';
import { ReservasPage } from '../pages/reservas/reservas';
import { ProcesoReservaPage } from '../pages/proceso-reserva/proceso-reserva';
import { TabsPage } from '../pages/tabs/tabs';

import { ToolbarEncontrarComponent } from '../components/toolbar-encontrar/toolbar-encontrar';
import { EncontrarMapComponent } from '../components/encontrar-map/encontrar-map';
import { CardAgendaComponent } from '../components/card-agenda/card-agenda';
import { ToolbarAgendaComponent } from '../components/toolbar-agenda/toolbar-agenda';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AgmCoreModule } from '@agm/core';
import { PoisProvider } from '../providers/pois/pois';

@NgModule({
  declarations: [
    MyApp,
    AgendaPage,
    ChatbotPage,
    OfertasPage,
    ReservasPage,
    EncontrarPage,
    ProcesoReservaPage,
    ToolbarEncontrarComponent,
    ToolbarAgendaComponent,
    CardAgendaComponent,
    EncontrarMapComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD5t4KvIZWbRWy8e9j71lQf3FIkuP8-aC8'
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AgendaPage,
    ChatbotPage,
    OfertasPage,
    ReservasPage,
    EncontrarPage,
    ProcesoReservaPage,
    ToolbarEncontrarComponent,
    ToolbarAgendaComponent,
    CardAgendaComponent,
    EncontrarMapComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PoisProvider
  ]
})
export class AppModule {}
