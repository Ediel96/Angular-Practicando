import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas 
import {APP_ROUTING} from './app.routes'

//Servicios


import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BuscadorComponent,
    HeroesComponent,
    HeroeTarjetaComponent,
    HeroeComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
