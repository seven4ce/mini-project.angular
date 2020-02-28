import { Component, OnInit } from '@angular/core';
import { Transaksi } from 'src/app/model/transaksi';
import { TransaksiServiceService } from 'src/app/service/transaksi-service.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-transaksi-list',
  templateUrl: './transaksi-list.component.html',
  styleUrls: ['./transaksi-list.component.css']
})
export class TransaksiListComponent implements OnInit {

  listTransaksi: Observable<Transaksi[]>;
  data : any;

  constructor(private trxService: TransaksiServiceService,
    private router: Router) { }


    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any>= new Subject();

    ngOnInit() {
      this.dtOptions = {
        pageLength: 7,
       lengthMenu:[[7, 10, 25, 50, 75, 100, -1], [7, 10, 25, 50, 75, 100, "All"]],
       processing: true
      };
      this.trxService.findAllTrx().subscribe(data => {
        this.listTransaksi = data;
      this.dtTrigger.next();
      })
    }

  public downloadFile(){
    this.trxService.downloadFileTrx().subscribe();
    var URL = this.trxService.downloadURLTrx();
    window.open(URL);
  }

  detailTransaksi(id: number){
    this.router.navigate(['detail-Transaksi', id]);
  }

}
