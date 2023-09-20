import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  template: `
    <ng-container *ngIf="isMobile; else desktopComponent">
      <app-product-mobile></app-product-mobile>
    </ng-container>

    <ng-template #desktopComponent>
      <app-product-desktop></app-product-desktop>
    </ng-template>
  `,
})
export class ProductComponent {
  isMobile: boolean;

  products: any[] = []; // Variável para armazenar a lista de produtos

  constructor(
    protected deviceService: DeviceDetectorService,
    protected productService: ProductService
  ) {
    this.isMobile = this.deviceService.isMobile();
  }

  ngOnInit() {
    // Método para buscar os produtos usando o serviço ProductService
    this.products = this.productService.getProducts();
  }
}
