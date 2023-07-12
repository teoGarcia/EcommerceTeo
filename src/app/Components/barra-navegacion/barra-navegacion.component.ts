import { style } from '@angular/animations';
import { NgStyle } from '@angular/common';
// import { viewClassName } from '@angular/compiler';
import { Component, OnInit, ElementRef, ViewChild, ViewChildren, Compiler} from '@angular/core';
import { showUpStaggered } from 'src/app/Components/animations/showUpStaggered.animation';

interface MenuItemsI {
  title: String;
  icon: String;
  link: String; 
}

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.scss'],
  animations: [showUpStaggered()]
})
export class BarraNavegacionComponent{

  CentrarBarraNav: boolean = true;
  boton: boolean = true;
  move: String = "";

  menu: {
    title: string;
    icon: string;
    link: string;
  }[] = [];

  constructor() { 
    this.generateMenu();

  }

  generateMenu(): void {
    this.menu = [
      {
        title: 'Inicio',
        icon: 'fas fa-home',
        link: '/'
      },
      {
        title: 'Productos',
        icon: 'fas fa-id-card',
        link: 'Datos-personales'
      },
      {
        title: 'Ofertas',
        icon: 'fas fa-skiing',
        link: 'Habilidades'
      },
      {
        title: 'Contacto',
        icon: 'fas fa-file-contract',
        link: 'Proyectos'
      }
    ]
  }
  presionar(){

    if(this.boton == true){

      this.move = '0';
      this.boton = false;

    }else{

      this.move = '100%';
      this.boton = true;
    }
    
  }
}