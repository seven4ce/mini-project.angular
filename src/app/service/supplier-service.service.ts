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

  constructor(private http: HttpClient) {
    this.baseURL = BaseURL.baseUrl;
    this.listSupplierUrl = 'supplier/all';
    this.saveSupplierUrl = 'supplier/save';

  }

  public findAll(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.baseURL}${this.listSupplierUrl}`);
  }

  public save(supplier: Supplier) {
    return this.http.post<Supplier>(`${this.baseURL}${this.saveSupplierUrl}`, supplier);
  }

}
