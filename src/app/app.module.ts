import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './Components/encabezado/encabezado.component';
import { BarraNavegacionComponent } from './Components/barra-navegacion/barra-navegacion.component';
import { GaleriaImagenesComponent } from './Components/galeria-imagenes/galeria-imagenes.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { OfertaComponent } from './Components/oferta/oferta.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    BarraNavegacionComponent,
    GaleriaImagenesComponent,
    InicioComponent,
    OfertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
