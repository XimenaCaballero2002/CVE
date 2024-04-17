import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { RecuperaComponent } from './recupera/recupera.component';
import { RegistroComponent } from './registro/registro.component';
import { DatosComponent } from './datos/datos.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'recupera',
    component: RecuperaComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'datos',
    component: DatosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
