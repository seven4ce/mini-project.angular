import { Component, OnInit } from '@angular/core';
import { Harga } from 'src/app/model/harga';
import { ActivatedRoute, Router } from '@angular/router';
import { HargaServiceService } from 'src/app/service/harga-service.service';

@Component({
  selector: 'app-harga-form',
  templateUrl: './harga-form.component.html',
  styleUrls: ['./harga-form.component.css']
})
export class HargaFormComponent implements OnInit {

  id: number;
  harga : Harga;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private hargaService: HargaServiceService) {
    this.harga = new Harga();
  }

  onSubmit() {
    this.hargaService.save(this.harga).subscribe(result => this.gotoListHarga());
  }

  gotoListHarga() {
    this.router.navigate(['/list-Harga']);
  }

  ngOnInit(): void {
  }



}
