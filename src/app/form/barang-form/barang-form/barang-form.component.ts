import { Component, OnInit } from '@angular/core';
import { Barang } from 'src/app/model/barang';
import { BarangServiceService } from 'src/app/service/barang-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HargaServiceService } from 'src/app/service/harga-service.service';
import { TypeServiceService } from 'src/app/service/type-service.service';
import { SupplierServiceService } from 'src/app/service/supplier-service.service';
import { Harga } from 'src/app/model/harga';
import { Observable } from 'rxjs';
import { TypeBarang } from 'src/app/model/type-barang';
import { Supplier } from 'src/app/model/supplier';

@Component({
  selector: 'app-barang-form',
  templateUrl: './barang-form.component.html',
  styleUrls: ['./barang-form.component.css']
})
export class BarangFormComponent implements OnInit {

  barang : Barang;
  listHarga: Observable<Harga[]>;
  listTypeBarang: Observable<TypeBarang[]>;
  listSupplier: Observable<Supplier[]>;
  selectedHarga: any;
  selectedType: any;
  selectedSupplier: any;


  constructor(
    private route: ActivatedRoute,
      private router: Router,
      private hargaService: HargaServiceService,
      private typeservice: TypeServiceService,
      private supplierservice: SupplierServiceService,
      private barangService: BarangServiceService) {
    this.barang = new Barang();
  }

  onSubmit() {
    this.barangService.save(this.barang).subscribe(result => this.gotoListBarang());
  }

  gotoListBarang() {
    this.router.navigate(['/list-Barang']);
  }


  ngOnInit(): void {
    this.hargaService.findAll().subscribe(data => {
      this.listHarga = data;
     })
     this.typeservice.findAll().subscribe(data => {
      this.listTypeBarang = data;
     })
     this.supplierservice.findAll().subscribe(data => {
      this.listSupplier = data;
     })
  }

  addObjectItem () {
    let obj = {
      idHarga: this.selectedHarga.idHarga,
      idType: this.selectedType.idType,
      idSupplier: this.selectedSupplier.idSupplier
    }

    this.barang.idHarga = obj.idHarga
    this.barang.idType = obj.idType
    this.barang.idSupplier = obj.idSupplier
  }

}
