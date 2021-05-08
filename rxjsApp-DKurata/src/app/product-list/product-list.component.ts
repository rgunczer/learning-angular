import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit, OnDestroy {

  private static instanceCounter = 0;

  constructor(private productService: ProductService) {}

  products$ = this.productService.productsWithCategory$;
  selectedProduct$ = this.productService.selectedProduct$;


  ngOnInit(): void {
    ProductListComponent.instanceCounter++;
    console.log(`ngOnInit ${ProductListComponent.instanceCounter}`);
  }

  ngOnDestroy(): void {
    ProductListComponent.instanceCounter--;
    console.log(`ngOnDestroy ${ProductListComponent.instanceCounter}`);
  }

  onSelect(productId: number): void {
    this.productService.changeSelectedProduct(productId);
  }

}
