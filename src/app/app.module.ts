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

@NgModule({
  declarations: [
    AppComponent,
    BarangListComponent,
    BarangFormComponent,
    TransaksiListComponent,
    TransaksiFormComponent,
    DetailTransaksiListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
