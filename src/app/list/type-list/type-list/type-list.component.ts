import { Component, OnInit } from '@angular/core';
import { TypeBarang } from 'src/app/model/type-barang';
import { TypeServiceService } from 'src/app/service/type-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {

  listTypeBarang: TypeBarang[];
  data : any;

  constructor(private typeService: TypeServiceService,
    private router: Router) { }

    ngOnInit(): void {
      this.typeService.findAll().subscribe(data => {
        this.listTypeBarang = data;
      });

     }

}
