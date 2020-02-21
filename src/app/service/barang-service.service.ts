import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Barang } from '../model/barang';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BarangServiceService {

  private listBarangUrl: string;
  private saveBarangUrl: string;
  private downloadFileExcel: string;

  constructor(private http: HttpClient) {
    this.listBarangUrl = 'http://localhost:7000/api/barang/list/search?startDate=&endDate=';
    this.saveBarangUrl = 'http://localhost:7000/api/barang/save';
    this.downloadFileExcel = 'http://localhost:7000/api/download/barang/search?startDate=&endDate='
  }


  public findAll(): Observable<Barang[]> {
    return this.http.get<Barang[]>(this.listBarangUrl);
  }

  public save(barang: Barang) {
    return this.http.post<Barang>(this.saveBarangUrl, barang);
  }

  public downloadFile(){
		return this.http.get(this.downloadFileExcel);
  }
  public downloadURL(){
		return this.downloadFileExcel;
  }






}
