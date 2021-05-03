import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard.module';
import { AddressComponent } from './navgation/components/address/address.component';
import { DashboardComponent } from './navgation/components/dashboard/dashboard.component';
import { DragdrapComponent } from './navgation/components/dragdrap/dragdrap.component';
import { TableComponent } from './navgation/components/table/table.component';
import { NavgationComponent } from './navgation/navgation.component';

const routes: Routes = [
  {
    path: '',
    component: NavgationComponent,
    children: [
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path: 'tabel',
        component: TableComponent
      },
      {
        path: 'drag',
        component: DragdrapComponent
      },
      {
        path: 'address',
        component: AddressComponent
      },
      {
        path:  '' ,
        component: DashboardComponent
      },
     
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
