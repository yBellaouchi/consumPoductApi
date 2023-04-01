import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  constructor(public modalRef: MdbModalRef<ModalComponent>) {}
}


// <div class="container-fluid">
// <div class="row">
//   <div class="col-lg-4 p-5">
//     <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
      // <div class="form-group row">
      //   <label class="col-sm-2 col-form-label" for="id">Id</label>
      //   <div class="col-sm-10">
      //     <input type="text" class="form-control" id="id" formControlName="id">
      //   </div>
      // </div>
      // <div class="form-group row">
      //   <label class="col-sm-2 col-form-label" for="code">code</label>
      //   <div class="col-sm-10">
      //     <input type="text" class="form-control" id="code" formControlName="code">
      //   </div>
      // </div>
      // <div class="form-group row">
      //   <label class="col-sm-2 col-form-label" for="libelle">libelle</label>
      //   <div class="col-sm-10">
      //     <input type="text" class="form-control" id="libelle" formControlName="libelle">
      //   </div>
      // </div>
      // <div class="form-group row">
      //   <label class="col-sm-2 col-form-label" for="prix">Prix</label>
      //   <div class="col-sm-10">
      //     <input type="number" class="form-control" id="prix" formControlName="prix">
      //   </div>
      // </div>
      // <button type="submit" [disabled]="contactForm.invalid" class="btn btn-primary mb-2">Create product</button>
//     </form>
//   </div>
// </div>
// </div>

// <!-- Add New -->
// <div class="modal fade" id="addnew" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//       <div class="modal-content">
//           <div class="modal-header">
//               <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
//               <h4 class="modal-title" id="myModalLabel">Add New</h4>
//           </div>
//   <div class="">
// <div class="container-fluid">
    
//       <div class="row form-group">
//         <div class="col-sm-2">
//           <label class="control-label modal-label">Firstname:</label>
//         </div>
//         <div class="col-sm-10">
//           <input type="text" class="form-control" name="firstname" required>
//         </div>
//       </div>
//       <div class="row form-group">
//         <div class="col-sm-2">
//           <label class="control-label modal-label">Lastname:</label>
//         </div>
//         <div class="col-sm-10">
//           <input type="text" class="form-control" name="lastname" required>
//         </div>
//       </div>
//       <div class="row form-group">
//         <div class="col-sm-2">
//           <label class="control-label modal-label">Address:</label>
//         </div>
//         <div class="col-sm-10">
//           <input type="text" class="form-control" name="address" required>
//         </div>
//       </div>
//           </div> 
//     </div>
//         </div>
//  </div>

// <h3>Edit product</h3>
// <div class="row">
//   <div >
//     <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
      
//       <div class="form-group row">
//         <label class="col-sm-2 col-form-label" for="code">code</label>
//         <div class="col-sm-10">
//           <input type="text" class="form-control" id="code" formControlName="code">
//         </div>
//       </div>
//       <div class="form-group row">
//         <label class="col-sm-2 col-form-label" for="libelle">libelle</label>
//         <div class="col-sm-10">
//           <input type="text" class="form-control" id="libelle" formControlName="libelle">
//         </div>
//       </div>
//       <div class="form-group row">
//         <label class="col-sm-2 col-form-label" for="prix">Prix</label>
//         <div class="col-sm-10">
//           <input type="number" class="form-control" id="prix" formControlName="prix">
//         </div>
//       </div>
//       <button type="submit" [disabled]="contactForm.invalid" class="btn btn-primary mb-2">Create product</button>
//     </form>
//   </div>
// </div>
