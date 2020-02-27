import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from './base-URL';
import { Observable } from 'rxjs/internal/Observable';
import { TypeBarang } from '../model/type-barang';

@Injectable({
  providedIn: 'root'
})
export class TypeServiceService {

  private baseURL: string;
  private listTypeUrl: string;
  private saveTypeUrl: string;

  constructor(private http: HttpClient) {
    this.baseURL = BaseURL.baseUrl;
    this.listTypeUrl = 'type-barang/all';
    this.saveTypeUrl = 'type-barang/save';

  }

  public findAll(): Observable<TypeBarang[]> {
    return this.http.get<TypeBarang[]>(`${this.baseURL}${this.listTypeUrl}`);
  }

  public save(type: TypeBarang) {
    return this.http.post<TypeBarang>(`${this.baseURL}${this.saveTypeUrl}`, type);
  }
}
