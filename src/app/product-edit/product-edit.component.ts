import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ProductService } from '../http/product.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private productService:ProductService,private httpClient: HttpClient,
    private router: Router,public modalRef: MdbModalRef<ProductEditComponent>,
    // public ListComponent:ProductListComponent
    ) {
    this.contactForm = this.formBuilder.group(
      {
        code: ['', Validators.required],
        libelle: ['', Validators.required],
        prix: ['', Validators.required]
      }
    )
  }
  ngOnInit(): void {
  }

  onSubmit() {
    console.log("submit", this.contactForm.value)
    if (this.contactForm.valid) {
      const produit = this.contactForm.value;
      console.log("produit", produit);
      console.log(produit.id);
      this.productService.editProduct(29,produit).subscribe(data => {
       console.log("edit success")});
       this.modalRef.close();
      //  this.ListComponent.ngOnInit();
      this.router.navigateByUrl("/products");
    
      }
  }}

