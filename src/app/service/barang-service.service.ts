import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Barang } from '../model/barang';
import { Observable } from 'rxjs/internal/Observable';
import { BaseURL } from './base-URL';

@Injectable({
  providedIn: 'root'
})
export class BarangServiceService {

  private listBarangUrl: string;
  private saveBarangUrl: string;
  private downloadFileExcel: string;
  private baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = BaseURL.baseUrl;
    this.listBarangUrl = 'barang/list/search?startDate=&endDate=';
    this.saveBarangUrl = 'barang/save';
    this.downloadFileExcel = 'download/barang/search?startDate=&endDate='
  }


  public findAll(): Observable<Barang[]> {
    return this.http.get<Barang[]>(`${this.baseURL}${this.listBarangUrl}`);
  }

  public save(barang: Barang) {
    return this.http.post<Barang>(`${this.baseURL}${this.saveBarangUrl}`, barang);
  }

  public downloadFile(){
		return this.http.get(`${this.baseURL}${this.downloadFileExcel}`);
  }
  public downloadURL(){
		return `${this.baseURL}${this.downloadFileExcel}`;
  }






}
