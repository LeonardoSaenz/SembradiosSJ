import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Terreno2PageRoutingModule } from './terreno2-routing.module';

import { Terreno2Page } from './terreno2.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Terreno2PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Terreno2Page]
})
export class Terreno2PageModule {}
