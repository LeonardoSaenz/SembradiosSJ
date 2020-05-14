import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terreno2',
  templateUrl: './terreno2.page.html',
  styleUrls: ['./terreno2.page.scss'],
})
export class Terreno2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  alimentos = [
    {
      sufix:"Buena",
      nombre:"Sandía",
      imagen:'./assets/terreno1/sandia.jpg',
      sonido:'/assets/terreno1/Sandia1.mp3',
      prefix:"",
    },
    {
      sufix:"",
      nombre:"Melón",
      imagen:'./assets/terreno1/melon.jpg',
      sonido:'/assets/terreno1/Melon.mp3',
      prefix:"de Alta Calidad",
    },
    {
      sufix:"",
      nombre:"Naranja",
      imagen:'./assets/terreno1/naranja.jpg',
      sonido:'/assets/terreno1/Naranjas.mp3',
      prefix:"",
    }
  ]

  procesarClick(alimento:any){
  let sonido = new Audio();
  sonido.src = alimento.sonido;
  sonido.load();
  sonido.play();
  }
}
