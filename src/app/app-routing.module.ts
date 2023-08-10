import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { GaleriaImagenesComponent } from './Components/galeria-imagenes/galeria-imagenes.component';
import { OfertaComponent } from './Components/oferta/oferta.component';
import { ContactoComponent } from './Components/contacto/contacto.component';

const routes: Routes = [

  {path: '', component: InicioComponent},
  {path: 'productos', component: GaleriaImagenesComponent},
  {path: 'ofertas', component: OfertaComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: InicioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
