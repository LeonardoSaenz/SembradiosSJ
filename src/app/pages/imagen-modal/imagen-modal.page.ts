import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavParams, IonSlides } from '@ionic/angular';
import { stringify } from 'querystring';


@Component({
  selector: 'app-imagen-modal',
  templateUrl: './imagen-modal.page.html',
  styleUrls: ['./imagen-modal.page.scss'],
})
export class ImagenModalPage implements OnInit {

  img: any;
  index : number;

  @ViewChild('slider', { read: ElementRef, static: false })slider: ElementRef;
  @ViewChild('slider2', { read: IonSlides, static: false })slider2: IonSlides;

  sliderOpts = {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,
    zoom: {
      maxRatio: 5,

    },
   
  };
  
  constructor(private modalController: ModalController, private navParams: NavParams) { }

  ngOnInit() {
    this.slider2.slideTo(this.index,0)
    this.index = this.navParams.get('index')
    this.img = this.navParams.get('img');
    console.log(this.index);
    console.log(this.img); 
  }

  zoom(zoomIn: boolean){
    let zoom = this.slider.nativeElement.swiper.zoom;
    if (zoomIn){
      zoom.in();
  //    this.slider2.lockSwipes(true);
    } else {
      zoom.out();
  //    this.slider2.lockSwipes(true);
    }
    
  }

  close() {
    this.modalController.dismiss();
  }
}
