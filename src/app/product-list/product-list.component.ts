import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ProductService } from '../http/product.service';
import { ModalComponent } from '../modal/modal.component';
import { Product } from '../models/product';
import { ProductAddComponent } from '../product-add/product-add.component';
import { ProductEditComponent } from '../product-edit/product-edit.component';
// import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];
  id!:number;
  modalRef: MdbModalRef<ModalComponent> | null = null;
  constructor(private productService:ProductService, 
    private router: Router,private modalService: MdbModalService,
    // public dialog: MdDialog
    // public dialogRef: MatDialogRef<ProductEditComponent>,
    // public dialog: MdDialog
    ) { 
    this.products=[];
  }
 

 
  openModal() {
    this.modalRef = this.modalService.open(ProductAddComponent)
  }
  openModalEdit(id:number) {
    this.modalRef = this.modalService.open(ProductEditComponent,),
    this.id=id;
    console.log(this.id);
    // console.log(this.id);
    // alert(this.id);
    // return this.dialogRef.open(RoleEditForm, this.id);
        // return this.dialog.open(ProductEditComponent, id);

  }

  ngOnInit(): void {
    console.log(this.productService.getAll());
    console.log("hhhh");
    this.getAll();
     // this.productService.getAll().subscribe(res=>console.log(res));
    

  }
  getAll(){
    this.productService.getAll().subscribe({
      next :(data)=>{
        this.products=data;
      }
    })
  }
deleteProduct(id:number) {
  this.router.navigateByUrl("/products")
  console.log("hhhhhhddh");
  
  this.productService.deletePost(id).subscribe(
    {
      next :(data :any)=>{
        console.log('Delete successful');
        this.getAll();
       this.router.navigateByUrl("/products")
      },error :(er)=>{
        console.log(er);
      }
    }
   
    
  );
}
}
