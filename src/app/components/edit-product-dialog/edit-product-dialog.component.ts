import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';

import { ICategory } from '../../shared/models/category.model';
import { PRODUCT_CATEGORIES, PRODUCT_UNITS } from '../../shared/models/admin-constants';

@Component({
  selector: 'app-edit-product-dialog',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    ButtonModule, 
    DropdownModule, 
    EditorModule, 
    FileUploadModule, 
    InputTextModule, 
    MultiSelectModule
  ],
  templateUrl: './edit-product-dialog.component.html',
  styleUrl: './edit-product-dialog.component.scss'
})
export class EditProductDialogComponent implements OnInit {

  public categories: ICategory[] = [];
  public selectedUnit: any | undefined;
  public units: any[] = [];

  constructor(public editProductDialogRef: DynamicDialogRef) {}

  public ngOnInit(): void {
    this.categories = this.getCategories();
    this.units = this.getUnits();
  }

  private getCategories(): ICategory[] {
    return PRODUCT_CATEGORIES;
  }

  private getUnits(): any[] {
    return PRODUCT_UNITS;
  }

}
