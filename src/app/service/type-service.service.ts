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
  private getTypeUrl: string;
  private deleteTypeUrl: string;

  constructor(private http: HttpClient) {
    this.baseURL = BaseURL.baseUrl;
    this.listTypeUrl = 'type-barang/all';
    this.saveTypeUrl = 'type-barang/save';
    this.getTypeUrl = 'type-barang/find?id=';
    this.deleteTypeUrl = 'type-barang/delete/';

  }

  public deleteType(id: number): Observable<any> {
    return this.http.post(`${this.baseURL}${this.deleteTypeUrl}${id}`, {});
  }

  public getType(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}${this.getTypeUrl}${id}`);
  }

  public findAll(): Observable<any> {
    return this.http.get(`${this.baseURL}${this.listTypeUrl}`);
  }

  public save(type: TypeBarang) {
    return this.http.post<TypeBarang>(`${this.baseURL}${this.saveTypeUrl}`, type);
  }
}
