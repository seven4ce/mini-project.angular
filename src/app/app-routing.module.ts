import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarangListComponent } from './list/barang-list/barang-list/barang-list.component';
import { BarangFormComponent } from './form/barang-form/barang-form/barang-form.component';
import { TransaksiListComponent } from './list/transaksi-list/transaksi-list/transaksi-list.component';
import { TransaksiFormComponent } from './form/transaksi-form/transaksi-form/transaksi-form.component';
import { DetailTransaksiListComponent } from './list/detail-transaksi/detail-transaksi-list/detail-transaksi-list.component';
import { SupplierComponent } from './list/supplier-list/supplier/supplier.component';
import { SupplierFormComponent } from './form/supplier-form/supplier-form/supplier-form.component';
import { HargaFormComponent } from './form/harga-form/harga-form/harga-form.component';
import { HargaListComponent } from './list/harga-list/harga-list/harga-list.component';
import { TypeListComponent } from './list/type-list/type-list/type-list.component';
import { TypeFormComponent } from './form/type-form/type-form/type-form.component';
import { HomeComponent } from './home/home/home.component';
import { UpdateBarangComponent } from './form/Update-Edit/update-barang/update-barang.component';
import { EditHargaComponent } from './form/Update-Edit/edit-harga/edit-harga.component';
import { EditTypeComponent } from './form/Update-Edit/edit-type/edit-type.component';
import { EditSupplierComponent } from './form/Update-Edit/edit-supplier/edit-supplier.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

      {
        path: 'Home',
        component:HomeComponent

      },
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

      },
      {
        path: 'update-Barang/:id',
        component:UpdateBarangComponent

      },
      {
        path: 'edit-Harga/:id',
        component:EditHargaComponent

      },
      {
        path: 'edit-Type/:id',
        component:EditTypeComponent

      },
      {
        path: 'edit-Supplier/:id',
        component:EditSupplierComponent

      },
      {
        path: 'list-Supplier',
        component: SupplierComponent

      },
      {
        path: 'save-Supplier',
        component: SupplierFormComponent

      },
      {
        path: 'list-Harga',
        component: HargaListComponent

      },
      {
        path: 'save-Harga',
        component: HargaFormComponent

      },
      {
        path: 'list-TypeBarang',
        component: TypeListComponent

      },
      {
        path: 'save-TypeBarang',
        component: TypeFormComponent

      }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
