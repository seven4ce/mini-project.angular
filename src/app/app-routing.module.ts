import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarangListComponent } from './list/barang-list/barang-list/barang-list.component';
import { BarangFormComponent } from './form/barang-form/barang-form/barang-form.component';


export const routes: Routes = [

      {
        path: 'list-Barang',
        component: BarangListComponent

      },
      {
        path: 'save-Barang',
        component:BarangFormComponent

      }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
