import { Component, OnInit } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { AddProductComponent } from '../../components/add-product/add-product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ButtonModule],
  providers: [DialogService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) {}

  show() {
    this.ref = this.dialogService.open(AddProductComponent, { header: 'Select a Product'});
}
  
  // #region Angular lifecycles
  
  public ngOnInit(): void {
    
  }

  // #endregion

}
