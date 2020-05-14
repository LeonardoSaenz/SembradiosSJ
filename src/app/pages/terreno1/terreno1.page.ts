import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terreno1',
  templateUrl: './terreno1.page.html',
  styleUrls: ['./terreno1.page.scss'],
})
export class Terreno1Page implements OnInit {

  constructor() { }

  alimentos = [
    {
      sufix:"Buen",
      nombre:"Maiz",
      imagen:'./assets/terreno1/maiz.jpg',
      sonido:'/assets/terreno1/Maiz1.mp3',
      prefix:"",
    },
    {
      sufix:"",
      nombre:"Frijol",
      imagen:'./assets/terreno1/frijol.jpg',
      sonido:'/assets/terreno1/Frijoles.mp3',
      prefix:"de Alta Calidad",
    },
    {
      sufix:"",
      nombre:"Papa",
      imagen:'./assets/terreno1/papa.jpg',
      sonido:'/assets/terreno1/Papa1.mp3',
      prefix:"",
    }
  ]

  procesarClick(alimento:any){
  let sonido = new Audio();
  sonido.src = alimento.sonido;
  sonido.load();
  sonido.play();
  }






  ngOnInit() {
  }

}
