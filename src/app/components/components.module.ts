import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ProductosComponent} from './productos/productos.component';
import { MapboxComponent } from './mapbox/mapbox.component';
import { HttpClientModule } from '@angular/common/http';

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
    MapboxComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class ComponentsModule { }
