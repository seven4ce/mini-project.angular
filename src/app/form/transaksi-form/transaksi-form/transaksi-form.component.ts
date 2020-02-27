import { Component, OnInit } from '@angular/core';
import { Transaksi } from 'src/app/model/transaksi';
import { ActivatedRoute, Router } from '@angular/router';
import { TransaksiServiceService } from 'src/app/service/transaksi-service.service';
import { BarangServiceService } from 'src/app/service/barang-service.service';
import { DetailTransaksi } from 'src/app/model/detail-transaksi';
import { Observable } from 'rxjs';
import { Barang } from 'src/app/model/barang';

@Component({
  selector: 'app-transaksi-form',
  templateUrl: './transaksi-form.component.html',
  styleUrls: ['./transaksi-form.component.css']
})
export class TransaksiFormComponent implements OnInit {

  trx: Transaksi;
  detailTransaksi: Observable<DetailTransaksi[]>;
  listBarang: Observable<Barang[]>;
  selectedBarang: any;
  jumlahBarang: number = 0;
  arrBarang: any[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private barangService: BarangServiceService,
      private trxService: TransaksiServiceService) {
        this.trx = new Transaksi();
        this.trx.detailTransaksi = [];
        this.trx.jumlahBayar = 0;
       }

       onSubmitTrx() {
        this.trxService.saveTrx(this.trx).subscribe(result => this.gotoTrxList());
      }

      gotoTrxList() {
        this.router.navigate(['/list-Transaksi']);
      }

  ngOnInit(): void {
    this.barangService.findAll().subscribe(data => {
     this.listBarang = data;
    })
  }

  addBarang () {
    let totalHarga = this.jumlahBarang * this.selectedBarang.idHarga
    let barang = {
      idBarang: this.selectedBarang.idBarang,
      jumlahBarang: this.jumlahBarang,
      totalHarga: totalHarga
    }

    this.trx.jumlahBayar += totalHarga
    this.arrBarang.push(this.selectedBarang)
    this.trx.detailTransaksi.push(barang)
  }
}
