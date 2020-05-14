import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {

   i:number = 0;

  constructor() { }
  alimentos = [
    {
      sufix:"Buen",
      nombre:"Maiz",
      imagen:'./assets/terreno1/maiz.jpg',
      prefix:"",
      ubicacion:"Terreno 1",
    },
    {
      sufix:"",
      nombre:"Frijol",
      imagen:'./assets/terreno1/frijol.jpg',
      prefix:"de Alta Calidad",
      ubicacion:"Terreno 1",
    },
    {
      sufix:"",
      nombre:"Papa",
      imagen:'./assets/terreno1/papa.jpg',
      prefix:"no asada",
      ubicacion:"Terreno 1",
    },
    {
      sufix:"Buena",
      nombre:"Sandía",
      imagen:'./assets/terreno1/sandia.jpg',
      prefix:"",
      ubicacion:"Terreno 2",
    },
    {
      sufix:"",
      nombre:"Melón",
      imagen:'./assets/terreno1/melon.jpg',
      prefix:"de Alta Calidad",
      ubicacion:"Terreno 2",
    },
    {
      sufix:"",
      nombre:"Naranja",
      imagen:'./assets/terreno1/naranja.jpg',
      
      prefix:"no asada",
      ubicacion:"Terreno 2",
    },
  ]
  ngOnInit() {}

}
