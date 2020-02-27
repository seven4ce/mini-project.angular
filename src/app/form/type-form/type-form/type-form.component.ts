import { Component, OnInit } from '@angular/core';
import { TypeBarang } from 'src/app/model/type-barang';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeServiceService } from 'src/app/service/type-service.service';

@Component({
  selector: 'app-type-form',
  templateUrl: './type-form.component.html',
  styleUrls: ['./type-form.component.css']
})
export class TypeFormComponent implements OnInit {

  typeBarang : TypeBarang;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private typeService: TypeServiceService) {
    this.typeBarang = new TypeBarang();
  }

  onSubmit() {
    this.typeService.save(this.typeBarang).subscribe(result => this.gotoListHarga());
  }

  gotoListHarga() {
    this.router.navigate(['/list-TypeBarang']);
  }

  ngOnInit(): void {
  }

}
