import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { GaleriaImagenesComponent } from './Components/galeria-imagenes/galeria-imagenes.component';

const routes: Routes = [

  {path: '', component: InicioComponent},
  {path: 'productos', component: GaleriaImagenesComponent},
  {path: '**', component: InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
