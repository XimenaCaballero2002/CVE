import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { DescribeComponent } from './describe/describe.component';
import { HistorialComponent } from './historial/historial.component';
import { ActualizaComponent } from './actualiza/actualiza.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'describe',
    component: DescribeComponent,
  },
  {
    path: 'actualiza',
    component: ActualizaComponent,
  },
  {
    path: 'historial',
    component: HistorialComponent,
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
