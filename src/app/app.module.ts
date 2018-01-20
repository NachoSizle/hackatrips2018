import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AgendaPage } from '../pages/agenda/agenda';
import { ChatbotPage } from '../pages/chatbot/chatbot';
import { EncontrarPage } from '../pages/encontrar/encontrar';
import { OfertasPage } from '../pages/ofertas/ofertas';
import { TabsPage } from '../pages/tabs/tabs';

import { ToolbarEncontrarComponent } from '../components/toolbar-encontrar/toolbar-encontrar';
import { EncontrarMapComponent } from '../components/encontrar-map/encontrar-map';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps } from '@ionic-native/google-maps';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MyApp,
    AgendaPage,
    ChatbotPage,
    OfertasPage,
    EncontrarPage,
    ToolbarEncontrarComponent,
    EncontrarMapComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD5t4KvIZWbRWy8e9j71lQf3FIkuP8-aC8'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AgendaPage,
    ChatbotPage,
    OfertasPage,
    EncontrarPage,
    ToolbarEncontrarComponent,
    EncontrarMapComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
