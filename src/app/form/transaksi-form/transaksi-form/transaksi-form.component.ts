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
  jumlahBarang: number = 1;
  totalBayar: number = 0;
  arrBarang: any[] = [];
  totalHarga: number = 0;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private barangService: BarangServiceService,
    private trxService: TransaksiServiceService) {
        this.trx = new Transaksi();
        this.trx.detailTransaksi = [];
        this.trx.grandTotal = 0;
        this.trx.jumlahBayar = 0;
        this.trx.kembalian = 0;
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
    let totalBayar = this.jumlahBarang * this.selectedBarang.harga.hargaSatuan
    let barang = {
      idBarang: this.selectedBarang.idBarang,
      jumlahBarang: this.jumlahBarang,
      totalHarga: totalBayar
    }

    this.trx.grandTotal += totalBayar
    this.trx.kembalian = this.trx.jumlahBayar - this.trx.grandTotal
    this.arrBarang.push(this.selectedBarang)
    this.trx.detailTransaksi.push(barang)
  }

  hitung(){
    this.trx.kembalian = this.trx.jumlahBayar - this.trx.grandTotal
  }

}
