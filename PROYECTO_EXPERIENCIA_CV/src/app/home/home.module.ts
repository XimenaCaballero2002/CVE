import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HeadComponent } from './head/head.component';
import { ActualizaComponent } from './actualiza/actualiza.component';
import { DescribeComponent } from './describe/describe.component';
import { HistorialComponent} from './historial/historial.component';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, HeadComponent, ActualizaComponent, DescribeComponent, HistorialComponent]
})
export class HomePageModule {}
