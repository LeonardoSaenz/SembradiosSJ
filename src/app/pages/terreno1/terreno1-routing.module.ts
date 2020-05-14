import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Terreno1Page } from './terreno1.page';

const routes: Routes = [
  {
    path: '',
    component: Terreno1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Terreno1PageRoutingModule {}
