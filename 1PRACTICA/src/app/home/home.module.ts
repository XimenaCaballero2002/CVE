import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { SchoologyComponent } from './schoology/schoology.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PieComponent } from './pie/pie.component';
import { RecuperaComponent } from './recupera/recupera.component';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [HomePage, BienvenidaComponent, SchoologyComponent, EncabezadoComponent, PieComponent, RecuperaComponent, RegistroComponent]
})
export class HomePageModule {}
