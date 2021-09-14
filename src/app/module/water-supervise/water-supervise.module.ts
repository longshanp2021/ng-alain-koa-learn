import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterSuperviseRoutingModule } from './water-supervise-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    WaterSuperviseRoutingModule,
    NzButtonModule,
    NzTableModule,
    NzCardModule
  ]
})
export class WaterSuperviseModule { }
