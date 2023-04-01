import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ProductService } from '../http/product.service';
import { Product } from '../models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  contactForm: FormGroup;
  products:Product[];


  constructor(private formBuilder: FormBuilder, private productService:ProductService,public modalRef: MdbModalRef<ProductAddComponent>,
    private router: Router) {
      this.products=[];
    this.contactForm = this.formBuilder.group(
      {
        id: ['', Validators.required],
        code: ['', Validators.required],
        libelle: ['', Validators.required],
        prix: ['', Validators.required]
      }
    )
  }
  ngOnInit(): void {
  }
  getAll(){
    this.productService.getAll().subscribe({
      next :(data)=>{
        this.products=data;
      }
    })
  }
  onSubmit() {
    console.log("submit", this.contactForm.value)
    if (this.contactForm.valid) {
      const produit = this.contactForm.value;
      console.log("produit ", produit)
      this.productService.addProduct({ 
        id:produit.id,
        prix:produit.prix,
        code:produit.code,
        libelle:produit.libelle
      }).subscribe(data => {
       console.log("data", data)});
       this.productService.getAll().subscribe({
        next :(data)=>{
          this.products=data;
          console.log(this.products)
        }
      });
        this.modalRef.close();
        this.router.navigateByUrl("/products")
      // this.httpClient.post("http://localhost:8083/produit",{
        // id:produit.id,
        // prix:produit.prix,
        // code:produit.code,
        // libelle:produit.libelle
      // }).subscribe(data => {
      //   console.log("data", data)
      //   this.router.navigateByUrl("/products")
      // })
    }
  }
  deleteProduct(id:number) {
    this.productService.deletePost(id).subscribe(
      () => {
       
        console.log('Delete successful');
        this.router.navigateByUrl("/products")
      }
      
    );
    this.getAll();
  }

}
