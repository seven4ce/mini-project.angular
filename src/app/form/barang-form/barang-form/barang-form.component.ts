import { Component, OnInit } from '@angular/core';
import { Barang } from 'src/app/model/barang';
import { BarangServiceService } from 'src/app/service/barang-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-barang-form',
  templateUrl: './barang-form.component.html',
  styleUrls: ['./barang-form.component.css']
})
export class BarangFormComponent implements OnInit {


  barang : Barang;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
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
  }

}
