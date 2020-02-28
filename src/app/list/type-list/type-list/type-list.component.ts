import { Component, OnInit } from '@angular/core';
import { TypeBarang } from 'src/app/model/type-barang';
import { TypeServiceService } from 'src/app/service/type-service.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {

  listTypeBarang: Observable<TypeBarang[]>;
  data : any;
  deleteMessage=false;

  constructor(private typeService: TypeServiceService,
    private router: Router) { }

    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any>= new Subject();

    ngOnInit() {
      this.dtOptions = {
        pageLength: 7,
       lengthMenu:[[7, 10, 25, 50, 75, 100, -1], [7, 10, 25, 50, 75, 100, "All"]],
       processing: true
      };
      this.typeService.findAll().subscribe(data => {
        this.listTypeBarang = data;
      this.dtTrigger.next();
      })
    }

    editType(id: number){
      this.router.navigate(['edit-Type', id]);
    }

    deleteType(id: number){
      this.typeService.deleteType(id)
        .subscribe(
          data => {
            console.log(data);
            this.deleteMessage=true;
            this.typeService.findAll().subscribe(data =>{
              this.listTypeBarang =data
              })
          },
          error => console.log(error));
    }



}
