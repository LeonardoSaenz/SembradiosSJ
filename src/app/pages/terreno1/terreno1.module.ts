import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Terreno1PageRoutingModule } from './terreno1-routing.module';

import { Terreno1Page } from './terreno1.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Terreno1PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Terreno1Page]
})
export class Terreno1PageModule {}
