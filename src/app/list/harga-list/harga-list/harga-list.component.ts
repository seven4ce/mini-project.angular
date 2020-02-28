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
  deleteMessage=false;

  constructor(private hargaService: HargaServiceService,
    private router: Router) { }

    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any>= new Subject();

    ngOnInit() {
      this.dtOptions = {
        pageLength: 7,
        lengthMenu:[[7, 10, 25, 50, 75, 100, -1], [7, 10, 25, 50, 75, 100, "All"]],
        processing: true
      };
      this.hargaService.findAll().subscribe(data => {
        this.listHarga = data;
      this.dtTrigger.next();
      })
    }

    editHarga(id: number){
      this.router.navigate(['edit-Harga', id]);
    }

    deleteHarga(id: number){
      this.hargaService.deleteHarga(id)
        .subscribe(
          data => {
            console.log(data);
            this.deleteMessage=true;
            this.hargaService.findAll().subscribe(data =>{
              this.listHarga =data
              })
          },
          error => console.log(error));
    }


}
