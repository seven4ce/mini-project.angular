import { Component, OnInit } from '@angular/core';
import { TypeBarang } from 'src/app/model/type-barang';
import { TypeServiceService } from 'src/app/service/type-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-type',
  templateUrl: './edit-type.component.html',
  styleUrls: ['./edit-type.component.css']
})
export class EditTypeComponent implements OnInit {

  id: number;
  typeBarang: TypeBarang;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
      private typeService: TypeServiceService) {
    this.typeBarang = new TypeBarang();
  }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.typeService.getType(this.id)
      .subscribe(data => {
        console.log(data)
        this.typeBarang = data;
      }, error => console.log(error));
  }

  updateType() {
    this.typeService.save(this.typeBarang)
    .subscribe(result => this.gotoListType());
  }

  onSubmit() {
    this.updateType();
  }

  gotoListType() {
    this.router.navigate(['/list-TypeBarang']);
  }

}
