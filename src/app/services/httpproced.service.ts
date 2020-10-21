/*import { Component, Inject, Injectable, InjectionToken, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule  } from '@angular/common/http';
import { AuthService } from 'src/app/services/authu.service';
import { Observable } from 'rxjs';
import { Product } from '../components/model/product.model';
import { Products } from '../components/model/products.model';
import { REST_URL } from '../app.module';



@Injectable({
  providedIn: 'root'
})
export class HttpprocedService {

  private product: Product[] = new Array<Product>();
  private products: Products[] = new Array<Products>();

  constructor(private http: HttpClient, @Inject(REST_URL) private url: string)
  {
    this.getData().subscribe(data => this.products = data);
  }
  getProducts(): Products[]{

  return this.products;

  }
  getData(): Observable<Product[]> {
    return this.sendRequest<Products[]>('GET', this.url);
  }

  saveProduct(product: Product) {
    if (product.id == 0 || product.id == null) {
       this.savProduct(product)
       .subscribe(p => this.products.push(p));
     }
   }
   savProduct(product: Product): Observable<Product> {
     return this.sendRequest<Product>("POST", this.url, product);

   }

  private sendRequest<T>(verb: string, url: string, body?: Product)
  : Observable<T> {
    return this.http.request<T>(verb, url, {
      body: body,
      headers: new HttpHeaders({
        "Access-Key": "<secret>",
        "Application-Name": "exampleApp"
      })
    });
  }
}
*/