import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/model/supplier';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierServiceService } from 'src/app/service/supplier-service.service';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.css']
})
export class SupplierFormComponent implements OnInit {


  supplier : Supplier;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private supplierService: SupplierServiceService) {
    this.supplier = new Supplier();
  }

  onSubmit() {
    this.supplierService.save(this.supplier).subscribe(result => this.gotoListSupplier());
  }

  gotoListSupplier() {
    this.router.navigate(['/list-Supplier']);
  }

  ngOnInit(): void {
  }

}
