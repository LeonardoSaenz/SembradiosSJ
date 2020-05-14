import { Component, OnInit } from '@angular/core';
import { ModalController, IonImg } from "@ionic/angular";
import { ImagenModalPage } from "../imagen-modal/imagen-modal.page"

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage{

  imagenes_papa = [
    'assets/Fotos_Papas/foto1.jpg',
    'assets/Fotos_Papas/foto2.jpg',
    'assets/Fotos_Papas/foto3.jpg',
    'assets/Fotos_Papas/foto4.jpg',
  ]

  imagenes_sandia = [
    'assets/Fotos_Sandias/foto1.jpg',
    'assets/Fotos_Sandias/foto2.jpg',
    'assets/Fotos_Sandias/foto3.jpg',
    'assets/Fotos_Sandias/foto4.jpg',
  ]

  imagenes_melon = [
    'assets/Fotos_Melones/foto1.jpg',
    'assets/Fotos_Melones/foto2.jpg',
    'assets/Fotos_Melones/foto3.jpg',
    'assets/Fotos_Melones/foto4.jpg',
  ]
  
  imagenes_naranja = [
    'assets/Fotos_Naranjas/foto1.jpg',
    'assets/Fotos_Naranjas/foto2.jpg',
    'assets/Fotos_Naranjas/foto3.jpg',
    'assets/Fotos_Naranjas/foto4.jpg',
  ]

  imagenes_frijol = [
    'assets/Fotos_Frijoles/foto1.jpg',
    'assets/Fotos_Frijoles/foto2.jpg',
    'assets/Fotos_Frijoles/foto3.jpg',
    'assets/Fotos_Frijoles/foto4.jpg',
  ]

  imagenes_maiz = [  
    'assets/Fotos_Maizes/foto1.jpg',
    'assets/Fotos_Maizes/foto2.jpg',
    'assets/Fotos_Maizes/foto3.jpg',
    'assets/Fotos_Maizes/foto4.jpg',
  ]

  constructor(private modalController: ModalController){

  }

  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20,    
  };

  openPreview(img,index){
    this.modalController.create({
      component: ImagenModalPage,
      componentProps: {
        img: img,
        index : index
      }
    }).then(modal => modal.present());
  }
  
}
