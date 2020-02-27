import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transaksi } from '../model/transaksi';
import { Observable } from 'rxjs/internal/Observable';
import { BaseURL } from './base-URL';

@Injectable({
  providedIn: 'root'
})
export class TransaksiServiceService {

  private urlTransksiGet: string;
  private urlTransksiSave: string;
  private urlTransksiDownload: string;
  private urlTransksiDetail: string;
  private baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = BaseURL.baseUrl;
    this.urlTransksiGet='transaksi/search?startDate=&endDate=';
    this.urlTransksiSave='transaksi/save';
    this.urlTransksiDownload ='download/transaksi/search?startDate=&endDate=';
    this.urlTransksiDetail ='detail/transaksi/search?startDate=&endDate=&id=';
  }

      public findAllTrx(): Observable<any> {
        return this.http.get(`${this.baseURL}${this.urlTransksiGet}`);
      }
     
      public saveTrx(trx: Transaksi) {
        return this.http.post<Transaksi>(`${this.baseURL}${this.urlTransksiSave}`, trx);
      }

      public downloadFileTrx(){
        return this.http.get(`${this.baseURL}${this.urlTransksiDownload}`);
      }

      public downloadURLTrx(){
        return `${this.baseURL}${this.urlTransksiDownload}`;
      }

      getDetailtrx(id: number): Observable<any> {
      return this.http.get(`${this.baseURL}${this.urlTransksiDetail}${id}`);
      }

}
