import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule,routes } from './app-routing.module';
import { BarangListComponent } from './list/barang-list/barang-list/barang-list.component';
import { BarangFormComponent } from './form/barang-form/barang-form/barang-form.component';
import { TransaksiListComponent } from './list/transaksi-list/transaksi-list/transaksi-list.component';
import { TransaksiFormComponent } from './form/transaksi-form/transaksi-form/transaksi-form.component';
import { DetailTransaksiListComponent } from './list/detail-transaksi/detail-transaksi-list/detail-transaksi-list.component';
import { SupplierComponent } from './list/supplier-list/supplier/supplier.component';
import { SupplierFormComponent } from './form/supplier-form/supplier-form/supplier-form.component';
import { HargaFormComponent } from './form/harga-form/harga-form/harga-form.component';
import { HargaListComponent } from './list/harga-list/harga-list/harga-list.component';
import { TypeFormComponent } from './form/type-form/type-form/type-form.component';
import { TypeListComponent } from './list/type-list/type-list/type-list.component';
import { HomeComponent } from './home/home/home.component';
import { DataTablesModule } from 'angular-datatables';
import { UpdateBarangComponent } from './form/Update-Edit/update-barang/update-barang.component';
import { EditHargaComponent } from './form/Update-Edit/edit-harga/edit-harga.component';
import { EditTypeComponent } from './form/Update-Edit/edit-type/edit-type.component';
import { EditSupplierComponent } from './form/Update-Edit/edit-supplier/edit-supplier.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authInterceptorProviders } from './service/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BarangListComponent,
    BarangFormComponent,
    TransaksiListComponent,
    TransaksiFormComponent,
    DetailTransaksiListComponent,
    UpdateBarangComponent,
    SupplierComponent,
    SupplierFormComponent,
    HargaFormComponent,
    HargaListComponent,
    TypeFormComponent,
    TypeListComponent,
    HomeComponent,
    EditHargaComponent,
    EditTypeComponent,
    EditSupplierComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
