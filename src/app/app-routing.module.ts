import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterSuperviseModule } from './module/water-supervise/water-supervise.module';


const routes: Routes = [
  {
    path: 'water-supervise',
    loadChildren: () => import("./module/water-supervise/water-supervise.module").then(m => WaterSuperviseModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
