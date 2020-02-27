import { Component, OnInit } from '@angular/core';
import { Harga } from 'src/app/model/harga';
import { HargaServiceService } from 'src/app/service/harga-service.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-harga-list',
  templateUrl: './harga-list.component.html',
  styleUrls: ['./harga-list.component.css']
})
export class HargaListComponent implements OnInit {

  listHarga: Observable<Harga[]>;
  data : any;

  constructor(private hargaService: HargaServiceService,
    private router: Router) { }

    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any>= new Subject();

    ngOnInit() {
      this.dtOptions = {
        pageLength: 5,
        lengthMenu:[[5, 10, 25, 50, 75, 100, -1], [5, 10, 25, 50, 75, 100, "All"]],
        processing: true
      };
      this.hargaService.findAll().subscribe(data => {
        this.listHarga = data;
      this.dtTrigger.next();
      })
    }



}
