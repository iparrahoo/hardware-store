import { Component, OnDestroy, OnInit } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { EditProductDialogComponent } from '../../components/edit-product-dialog/edit-product-dialog.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ButtonModule],
  providers: [DialogService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, OnDestroy {

  public editProductDialogRef: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) { }
  
  // #region Angular lifecycles
  
  public ngOnInit(): void {
    
  }

  public ngOnDestroy(): void {
    if (this.editProductDialogRef) this.editProductDialogRef.destroy();
  }

  // #endregion

  // #region Public methods

  /**
   * Open a dynamic dialog which allow the user to add a new product on the same page.
   */
  public addProduct(): void {
    this.editProductDialogRef = this.dialogService.open(
      EditProductDialogComponent, 
      { 
        header: 'Add new product',
        styleClass: 'edp-dialog',
      }
    );
    this.editProductDialogRef.onClose.subscribe(data => console.log(data));
  }

  // #endregion

}
