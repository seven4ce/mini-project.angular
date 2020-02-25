import { Component, OnInit } from '@angular/core';
import { DetailTransaksi } from 'src/app/model/detail-transaksi';
import { TransaksiServiceService } from 'src/app/service/transaksi-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-transaksi-list',
  templateUrl: './detail-transaksi-list.component.html',
  styleUrls: ['./detail-transaksi-list.component.css']
})
export class DetailTransaksiListComponent implements OnInit {

  id: number;
  detailTrx: DetailTransaksi[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private detailService: TransaksiServiceService) { }



	 ngOnInit() {

		this.id = this.route.snapshot.params['id'];

		this.detailService.getDetailtrx(this.id)
		  .subscribe(data => {
			console.log(data)
			this.detailTrx = data;
		  }, error => console.log(error));
	  }

}
