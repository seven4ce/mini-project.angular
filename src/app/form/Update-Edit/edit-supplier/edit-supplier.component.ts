import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/model/supplier';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierServiceService } from 'src/app/service/supplier-service.service';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent implements OnInit {

  id: number;
  supplier: Supplier;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
      private supplierService: SupplierServiceService) {
    this.supplier = new Supplier();
  }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.supplierService.getSupplier(this.id)
      .subscribe(data => {
        console.log(data)
        this.supplier = data;
      }, error => console.log(error));
  }

  updateSupplier() {
    this.supplierService.save(this.supplier)
    .subscribe(result => this.gotoListSupplier());
  }

  onSubmit() {
    this.updateSupplier();
  }

  gotoListSupplier() {
    this.router.navigate(['/list-Supplier']);
  }

}
