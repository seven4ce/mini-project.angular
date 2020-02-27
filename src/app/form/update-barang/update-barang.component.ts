import { Component, OnInit } from '@angular/core';
import { Barang } from 'src/app/model/barang';
import { ActivatedRoute, Router } from '@angular/router';
import { BarangServiceService } from 'src/app/service/barang-service.service';

@Component({
  selector: 'app-update-barang',
  templateUrl: './update-barang.component.html',
  styleUrls: ['./update-barang.component.css']
})
export class UpdateBarangComponent implements OnInit {

  id: number;
  barang: Barang;

  constructor(private route: ActivatedRoute,private router: Router,
    private barangService: BarangServiceService) {
      this.barang = new Barang();
     }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.barangService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.barang = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.barangService.save(this.barang)
    .subscribe(result => this.gotoListBarang());
  }

  onSubmit() {
    this.updateEmployee();
  }

  gotoListBarang() {
    this.router.navigate(['/list-Barang']);
  }

}
