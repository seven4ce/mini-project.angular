import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/model/supplier';
import { SupplierServiceService } from 'src/app/service/supplier-service.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {


  listSupplier: Observable<Supplier[]>;
  data : any;

  constructor(private supplierService: SupplierServiceService,
    private router: Router) { }

    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any>= new Subject();

    ngOnInit() {
      this.dtOptions = {
        pageLength: 7,
        lengthMenu:[[7, 10, 25, 50, 75, 100, -1], [7, 10, 25, 50, 75, 100, "All"]],
        processing: true
      };
      this.supplierService.findAll().subscribe(data => {
        this.listSupplier = data;
      this.dtTrigger.next();
      })
    }



}
