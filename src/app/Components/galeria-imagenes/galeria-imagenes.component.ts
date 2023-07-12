import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria-imagenes',
  templateUrl: './galeria-imagenes.component.html',
  styleUrls: ['./galeria-imagenes.component.scss']
})
export class GaleriaImagenesComponent {

  images: { url: string }[] = [
    { url: 'image1.jpg' },
    { url: 'image2.jpg' },
    { url: 'image3.jpg' },
    { url: 'image1.jpg' },
    { url: 'image2.jpg' },
    { url: 'image3.jpg' },
    { url: 'image1.jpg' },
    { url: 'image2.jpg' },
    { url: 'image3.jpg' },
    { url: 'image1.jpg' },
    { url: 'image2.jpg' },
    { url: 'image3.jpg' },
    { url: 'image1.jpg' },
    { url: 'image2.jpg' },
    { url: 'image3.jpg' }
    // Agrega más imágenes según tus necesidades
  ];

  name: { alt: string }[] = [

    { alt: 'name1' },
    { alt: 'name2' },

  ]

}
