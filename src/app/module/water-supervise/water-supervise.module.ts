import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterSuperviseRoutingModule } from './water-supervise-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { SuperviseProjectComponent } from './components/supervise-project/supervise-project.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ContentComponent,
    SuperviseProjectComponent
  ],
  imports: [
    CommonModule,
    WaterSuperviseRoutingModule,
    NzTableModule,
    NzCardModule,
    NzCalendarModule,
    NzButtonModule
  ]
})
export class WaterSuperviseModule { }
