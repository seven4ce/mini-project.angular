import { Component, OnInit } from '@angular/core';
import { TypeBarang } from 'src/app/model/type-barang';
import { TypeServiceService } from 'src/app/service/type-service.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {

  listTypeBarang: Observable<TypeBarang[]>;
  data : any;

  constructor(private typeService: TypeServiceService,
    private router: Router) { }

    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any>= new Subject();

    ngOnInit() {
      this.dtOptions = {
        pageLength: 5,
        lengthMenu:[[5, 10, 25, 50, 75, 100, -1], [5, 10, 25, 50, 75, 100, "All"]],
        processing: true
      };
      this.typeService.findAll().subscribe(data => {
        this.listTypeBarang = data;
      this.dtTrigger.next();
      })
    }



}
