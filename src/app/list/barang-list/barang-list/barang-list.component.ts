import { Component, OnInit } from '@angular/core';
import { Barang } from 'src/app/model/barang';
import { BarangServiceService } from 'src/app/service/barang-service.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-barang-list',
  templateUrl: './barang-list.component.html',
  styleUrls: ['./barang-list.component.css']
})

export class BarangListComponent implements OnInit {

  listBarang: Observable<Barang[]>;
  data : any;

  constructor(private barangService: BarangServiceService,
    private router: Router) {

   }


   dtOptions: DataTables.Settings = {};
   dtTrigger: Subject<any>= new Subject();

   ngOnInit() {
     this.dtOptions = {
       pageLength: 5,
       lengthMenu:[[5, 10, 25, 50, 75, 100, -1], [5, 10, 25, 50, 75, 100, "All"]],
       processing: true
     };
     this.barangService.findAll().subscribe(data => {
     this.listBarang = data;
     this.dtTrigger.next();
     })
   }


   public downloadFile(){
      this.barangService.downloadFile().subscribe();
      var URL = this.barangService.downloadURL();
      window.open(URL);
    }

    updateBarang(id: number){
      this.router.navigate(['update-Barang', id]);
    }


}
