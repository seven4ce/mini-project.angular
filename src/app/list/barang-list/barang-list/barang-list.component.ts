import { Component, OnInit } from '@angular/core';
import { Barang } from 'src/app/model/barang';
import { BarangServiceService } from 'src/app/service/barang-service.service';

@Component({
  selector: 'app-barang-list',
  templateUrl: './barang-list.component.html',
  styleUrls: ['./barang-list.component.css']
})

export class BarangListComponent implements OnInit {

  listBarang: Barang[];
  data : any;

  constructor(private barangService: BarangServiceService) {

   }

   public downloadFile(){
      this.barangService.downloadFile().subscribe();
      var URL = this.barangService.downloadURL();
      window.open(URL);
    }



  ngOnInit(): void {
    this.barangService.findAll().subscribe(data => {
      this.listBarang = data;
    });

   }








}
