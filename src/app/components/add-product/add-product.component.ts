import { Component } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [InputTextModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

}
