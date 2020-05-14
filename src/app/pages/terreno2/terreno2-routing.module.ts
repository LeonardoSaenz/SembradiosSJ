import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Terreno2Page } from './terreno2.page';

const routes: Routes = [
  {
    path: '',
    component: Terreno2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Terreno2PageRoutingModule {}
