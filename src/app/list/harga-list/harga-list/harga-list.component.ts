import { Component, OnInit } from '@angular/core';
import { Harga } from 'src/app/model/harga';
import { HargaServiceService } from 'src/app/service/harga-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-harga-list',
  templateUrl: './harga-list.component.html',
  styleUrls: ['./harga-list.component.css']
})
export class HargaListComponent implements OnInit {

  listHarga: Harga[];
  data : any;

  constructor(private hargaService: HargaServiceService,
    private router: Router) { }

    ngOnInit(): void {
      this.hargaService.findAll().subscribe(data => {
        this.listHarga = data;
      });

     }

}
