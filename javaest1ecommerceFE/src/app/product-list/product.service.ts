import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8080/product/all");
  }

  createProduct(product: Product, username: String, password: String) {
    return this.http.post<Product>("http://localhost:8080/product/create", product, this.createHeader(username, password))
  }

  createHeader(user, pass) {
    return {
      headers: new HttpHeaders(
        {
          "Authorization": "Basic " + btoa(user + ":" + pass),
          "Access-Control-Allow-Origin": "*"
        }
      )
    }
  }
}
