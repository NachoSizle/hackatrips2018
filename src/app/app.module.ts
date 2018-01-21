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
import { RestaurantInfoPage } from '../pages/restaurant-info/restaurant-info';
import { RestaurantReservaPage } from '../pages/restaurant-reserva/restaurant-reserva';
import { TabsPage } from '../pages/tabs/tabs';

import { ToolbarEncontrarComponent } from '../components/toolbar-encontrar/toolbar-encontrar';
import { EncontrarMapComponent } from '../components/encontrar-map/encontrar-map';
import { EncontrarListaComponent } from '../components/encontrar-lista/encontrar-lista';
import { CardAgendaComponent } from '../components/card-agenda/card-agenda';
import { CardRestaurantComponent } from '../components/card-restaurant/card-restaurant';
import { CardRestaurantReservaComponent } from '../components/card-restaurant-reserva/card-restaurant-reserva';
import { ToolbarAgendaComponent } from '../components/toolbar-agenda/toolbar-agenda';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MyApp,
    AgendaPage,
    ChatbotPage,
    OfertasPage,
    ReservasPage,
    EncontrarPage,
    ProcesoReservaPage,
    RestaurantInfoPage,
    ToolbarEncontrarComponent,
    ToolbarAgendaComponent,
    CardAgendaComponent,
    CardRestaurantComponent,
    EncontrarMapComponent,
    EncontrarListaComponent,
    TabsPage,
    RestaurantReservaPage,
    CardRestaurantReservaComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD5t4KvIZWbRWy8e9j71lQf3FIkuP8-aC8'
    }),
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
     })
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
    RestaurantInfoPage,
    ToolbarEncontrarComponent,
    ToolbarAgendaComponent,
    CardAgendaComponent,
    CardRestaurantComponent,
    EncontrarMapComponent,
    EncontrarListaComponent,
    TabsPage,
    RestaurantReservaPage,
    CardRestaurantReservaComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
