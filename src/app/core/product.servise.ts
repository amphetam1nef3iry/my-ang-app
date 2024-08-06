import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private baseUrl = 'https://ang-shopapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get<any>('${this.baseUrl}/${id}');
  }
}
