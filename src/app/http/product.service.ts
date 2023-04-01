import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 

  }
  getAll():Observable<any>{
return this.http.get("http://localhost:8083/produit");
  }
addProduct(product :any){
  return  this.http.post("http://localhost:8083/produit",product);
}
editProduct(id:any,product :any){
  return  this.http.put("http://localhost:8083/produit/"+id,product);
}
deletePost(id: number): Observable<{}> {
  return this.http.delete("http://localhost:8083/produit/" + id);
}
}

