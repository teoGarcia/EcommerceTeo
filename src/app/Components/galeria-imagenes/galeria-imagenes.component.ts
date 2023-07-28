import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria-imagenes',
  templateUrl: './galeria-imagenes.component.html',
  styleUrls: ['./galeria-imagenes.component.scss']
})
export class GaleriaImagenesComponent {

  images: { url: string, name:string, price: string }[] = [
    { url: '../../../assets/images/Portacigarros.jpg', name: 'Caja de Almacenamiento de Cigarros Exp. Automática (No incluye Encendedor)', price: '$5.990' }, 
    { url: '../../../assets/images/LijaAgua2000.jpg', name: 'Lija al Agua N° 2000', price: '$950' },
    { url: '../../../assets/images/LogoTeoCommerce.jpg', name: 'Imagen 3', price: '$9.990' },
    { url: '../../../assets/images/LogoTeoCommerce.jpg', name: 'Imagen 4', price: '$9.990' },
    { url: '../../../assets/images/LogoTeoCommerce.jpg', name: 'Imagen 5', price: '$9.990' },
    { url: '../../../assets/images/LogoTeoCommerce.jpg', name: 'Imagen 6', price: '$9.990' },
    { url: '../../../assets/images/LogoTeoCommerce.jpg', name: 'Imagen 7', price: '$9.990' },
    { url: '../../../assets/images/LogoTeoCommerce.jpg', name: 'Imagen 8', price: '$9.990' },
    { url: '../../../assets/images/LogoTeoCommerce.jpg', name: 'Imagen 9', price: '$9.990' },
    { url: '../../../assets/images/LogoTeoCommerce.jpg', name: 'Imagen 10', price: '$9.990' },
    { url: '../../../assets/images/LogoTeoCommerce.jpg', name: 'Imagen 11', price: '$9.990' },
    { url: '../../../assets/images/LogoTeoCommerce.jpg', name: 'Imagen 12', price: '$9.990' },
    { url: '../../../assets/images/LogoTeoCommerce.jpg', name: 'Imagen 13', price: '$9.990' },
    { url: '../../../assets/images/LogoTeoCommerce.jpg', name: 'Imagen 14', price: '$9.990' },
    { url: '../../../assets/images/LogoTeoCommerce.jpg', name: 'Imagen 15', price: '$9.990' }
    // Agrega más imágenes según tus necesidades
  ];

}
