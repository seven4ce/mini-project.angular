import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from './base-URL';
import { Supplier } from '../model/supplier';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SupplierServiceService {

  private baseURL: string;
  private listSupplierUrl: string;
  private saveSupplierUrl: string;
  private getSupplierUrl: string;
  private deleteSupplierUrl: string;

  constructor(private http: HttpClient) {
    this.baseURL = BaseURL.baseUrl;
    this.listSupplierUrl = 'supplier/all';
    this.saveSupplierUrl = 'supplier/save';
    this.getSupplierUrl = 'supplier/find?id=';
    this.deleteSupplierUrl = 'supplier/delete/';

  }

  public deleteSupplier(id: number): Observable<any> {
    return this.http.post(`${this.baseURL}${this.deleteSupplierUrl}${id}`, {});
  }

  public getSupplier(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}${this.getSupplierUrl}${id}`);
  }

  public findAll(): Observable<any> {
    return this.http.get(`${this.baseURL}${this.listSupplierUrl}`);
  }

  public save(supplier: Supplier) {
    return this.http.post<Supplier>(`${this.baseURL}${this.saveSupplierUrl}`, supplier);
  }

}
