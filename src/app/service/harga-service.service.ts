import { Injectable } from '@angular/core';
import { BaseURL } from './base-URL';
import { HttpClient } from '@angular/common/http';
import { Harga } from '../model/harga';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HargaServiceService {

  private baseURL: string;
  private listHargaUrl: string;
  private saveHargaUrl: string;

  constructor(private http: HttpClient) {
    this.baseURL = BaseURL.baseUrl;
    this.listHargaUrl = 'harga/all';
    this.saveHargaUrl = 'harga/save';

  }

  public findAll(): Observable<any> {
    return this.http.get(`${this.baseURL}${this.listHargaUrl}`);
  }

  public save(harga: Harga) {
    return this.http.post<Harga>(`${this.baseURL}${this.saveHargaUrl}`, harga);
  }

}
