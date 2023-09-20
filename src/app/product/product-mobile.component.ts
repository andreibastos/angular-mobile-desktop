import { Component } from '@angular/core';
import { ProductComponent } from './product.component';

@Component({
  selector: 'app-product-mobile',
  templateUrl: './product-mobile.component.html',
  styleUrls: ['./product-desktop.component.css'],
})
export class ProductMobileComponent extends ProductComponent {
  // Lógica específica para a versão mobile do produto
}
