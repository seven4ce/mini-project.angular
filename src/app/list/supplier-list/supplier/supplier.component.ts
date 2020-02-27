import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/model/supplier';
import { SupplierServiceService } from 'src/app/service/supplier-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {


  listSupplier: Supplier[];
  data : any;

  constructor(private supplierService: SupplierServiceService,
    private router: Router) { }

    ngOnInit(): void {
      this.supplierService.findAll().subscribe(data => {
        this.listSupplier = data;
      });

     }

}
