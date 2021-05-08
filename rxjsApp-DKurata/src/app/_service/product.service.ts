import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_type/product.model';
import { map, shareReplay, tap } from 'rxjs/operators';
import { Category } from '../_type/category.model';
import { combineLatest, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:3000/';

  private productSelectedAction = new Subject<number>();

  productSelectedAction$ = this.productSelectedAction.asObservable();


  constructor(private http: HttpClient) { }

  products$ = this.http.get<Product[]>(this.url + 'products')
    .pipe(
      tap(console.table),
      shareReplay()
    );

  categories$ = this.http.get<Category[]>(this.url + 'categories')
    .pipe(
      tap(console.table),
      shareReplay()
    );

  productsWithCategory$ = combineLatest([
    this.products$,
    this.categories$
    // this.http.get<Product[]>(this.url + 'products'),
    // this.http.get<Category[]>(this.url + 'categories')
  ])
    .pipe(
      map(
        ([products, categories]: [Product[], Category[]]) => {
          console.log('here');
          console.log(products.length);
          console.log(categories.length);
          return products.map(
            p => ({
              ...p,
              category: categories.find(c => p.categoryId === c.id)?.name
            } as Product)
          )
        }
      ),
      tap(console.log)
    )

    selectedProduct$ = combineLatest([
      this.productSelectedAction,
      this.productsWithCategory$
    ])
    .pipe(
      map(
        ([selectedProductId, products]: [number, Product[]]) =>
          products.find(product => product.id === selectedProductId)
      )
    )

    changeSelectedProduct(selectedProductId: number): void {
      console.log('goo ', selectedProductId);
      this.productSelectedAction.next(selectedProductId);
    }

}


