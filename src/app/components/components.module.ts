import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ProductosComponent} from './productos/productos.component';
import { MapboxComponent } from './mapbox/mapbox.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '/',redirectTo: 'inicio', 
    pathMatch: 'full' 
  },
  { 
    path: 'inicio',
  },
  {
    path: 'terreno1',
  },
  {
    path: 'terreno2',
  },
  {
    path: 'informacion',
  },
  {
    path: 'galeria',
  },
  {
    path: 'contacto',
  }
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductosComponent,
    MapboxComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ProductosComponent,
    MapboxComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
})
export class ComponentsModule { }
