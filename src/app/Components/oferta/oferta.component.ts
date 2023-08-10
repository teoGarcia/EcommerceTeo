import { Component } from '@angular/core';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss']
})
export class OfertaComponent {

  images: { url: string, name:string, price: string }[] = [

    { url: '../../../assets/images/Portacigarros.jpg', name: 'Caja de Almacenamiento de Cigarros Exp. Automática (No incluye Encendedor)', price: '$5.990' }, 
    { url: '../../../assets/images/LijaAgua2000.jpg', name: 'Lija al Agua N° 2000', price: '$950' },
    { url: '../../../assets/images/LogoTeoCommerce.jpg', name: 'Imagen 3', price: '$9.990' },
    { url: '../../../assets/images/LogoTeoCommerce.jpg', name: 'Imagen 4', price: '$9.990' }

  ];

}
