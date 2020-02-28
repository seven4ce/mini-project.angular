import { Component, OnInit } from '@angular/core';
import { Harga } from 'src/app/model/harga';
import { ActivatedRoute, Router } from '@angular/router';
import { HargaServiceService } from 'src/app/service/harga-service.service';

@Component({
  selector: 'app-edit-harga',
  templateUrl: './edit-harga.component.html',
  styleUrls: ['./edit-harga.component.css']
})
export class EditHargaComponent implements OnInit {

  id: number;
  harga: Harga;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
      private hargaService: HargaServiceService) {
    this.harga = new Harga();
  }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.hargaService.getHarga(this.id)
      .subscribe(data => {
        console.log(data)
        this.harga = data;
      }, error => console.log(error));
  }

  updateHarga() {
    this.hargaService.save(this.harga)
    .subscribe(result => this.gotoListHarga());
  }

  onSubmit() {
    this.updateHarga();
  }

  gotoListHarga() {
    this.router.navigate(['/list-Harga']);
  }

}
