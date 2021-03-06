import { Component, OnInit, OnDestroy } from '@angular/core';

// import { Subscription } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';

import { Store, select } from '@ngrx/store';
import * as fromProduct from '../state/product.reducer';
import * as productActions from '../state/product.actions';
import { takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  // products: Product[];
  products$: Observable<Product[]>;

  componentActive = true;

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  errorMessage$: Observable<string>;
  // sub: Subscription;

  constructor(
    private store: Store<fromProduct.State>,
    private productService: ProductService
  ) {

  }

  ngOnInit(): void {
    // TODO: unsubscribe
    // this.sub = this.productService.selectedProductChanges$.subscribe(
    this.store.pipe(select(fromProduct.getCurrentProduct)).subscribe(
      // selectedProduct => this.selectedProduct = selectedProduct
      currentProduct => this.selectedProduct = currentProduct
    );

    // this.productService.getProducts().subscribe({
    //   next: (products: Product[]) => this.products = products,
    //   error: (err: any) => this.errorMessage = err.error
    // });
    this.store.dispatch(new productActions.Load());
    // this.store.pipe(select(fromProduct.getProducts), takeWhile(() => this.componentActive))
    //   .subscribe((products: Product[]) => {
    //     this.products = products;
    //   });
    this.products$ = this.store.pipe(select(fromProduct.getProducts));
    this.errorMessage$ = this.store.pipe(select(fromProduct.getError));


    // TODO: unsubsribe
    // this.store.pipe(select('products'))
    this.store.pipe(select(fromProduct.getShowProductCode))
      // .subscribe(products => {
      .subscribe(showProductCode => {
        // this.displayCode = products.showProductCode;
        this.displayCode = showProductCode;
      });
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
    this.componentActive = false;
  }

  checkChanged(value: boolean): void {
    // this.displayCode = value;
    // this.store.dispatch({
    //   type: 'TOGGLE_PRODUCT_CODE',
    //   payload: value
    // });
    this.store.dispatch(new productActions.ToggleProductCode(value));
  }

  newProduct(): void {
    // this.productService.changeSelectedProduct(this.productService.newProduct());
    this.store.dispatch(new productActions.InitializeCurrentProduct());
  }

  productSelected(product: Product): void {
    // this.productService.changeSelectedProduct(product);
    this.store.dispatch(new productActions.SetCurrentProduct(product));
  }

}
