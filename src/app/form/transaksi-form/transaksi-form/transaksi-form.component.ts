import { Component, OnInit } from '@angular/core';
import { Transaksi } from 'src/app/model/transaksi';
import { ActivatedRoute, Router } from '@angular/router';
import { TransaksiServiceService } from 'src/app/service/transaksi-service.service';
import { DetailTransaksi } from 'src/app/model/detail-transaksi';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transaksi-form',
  templateUrl: './transaksi-form.component.html',
  styleUrls: ['./transaksi-form.component.css']
})
export class TransaksiFormComponent implements OnInit {

  trx: Transaksi;
  detailTransaksi: Observable<DetailTransaksi[]>;

  constructor(private route: ActivatedRoute,
    private router: Router,
      private trxService: TransaksiServiceService) {
        this.trx = new Transaksi();

       }

       onSubmitTrx() {
        this.trxService.saveTrx(this.trx).subscribe(result => this.gotoTrxList());
      }

      gotoTrxList() {
        this.router.navigate(['/list-Transaksi']);
      }

  ngOnInit(): void {
  }

}
