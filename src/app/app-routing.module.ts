import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarangListComponent } from './list/barang-list/barang-list/barang-list.component';
import { BarangFormComponent } from './form/barang-form/barang-form/barang-form.component';
import { TransaksiListComponent } from './list/transaksi-list/transaksi-list/transaksi-list.component';
import { TransaksiFormComponent } from './form/transaksi-form/transaksi-form/transaksi-form.component';
import { DetailTransaksiListComponent } from './list/detail-transaksi/detail-transaksi-list/detail-transaksi-list.component';


export const routes: Routes = [

      {
        path: 'list-Barang',
        component: BarangListComponent

      },
      {
        path: 'save-Barang',
        component:BarangFormComponent

      },
      {
        path: 'list-Transaksi',
        component: TransaksiListComponent

      },
      {
        path: 'save-Transaksi',
        component:TransaksiFormComponent

      },
      {
        path: 'detail-Transaksi/:id',
        component:DetailTransaksiListComponent

      }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
