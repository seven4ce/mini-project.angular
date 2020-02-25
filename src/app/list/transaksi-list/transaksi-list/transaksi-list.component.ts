import { Component, OnInit } from '@angular/core';
import { Transaksi } from 'src/app/model/transaksi';
import { TransaksiServiceService } from 'src/app/service/transaksi-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaksi-list',
  templateUrl: './transaksi-list.component.html',
  styleUrls: ['./transaksi-list.component.css']
})
export class TransaksiListComponent implements OnInit {

  listTransaksi: Transaksi[];

  constructor(private trxService: TransaksiServiceService,
    private router: Router) { }

  public downloadFile(){
    this.trxService.downloadFileTrx().subscribe();
    var URL = this.trxService.downloadURLTrx();
    window.open(URL);
  }

  ngOnInit(): void {
    this.trxService.findAllTrx().subscribe(data => {
      this.listTransaksi = data;
    });
  }

  detailTransaksi(id: number){
    this.router.navigate(['detail-Transaksi', id]);
  }

}
