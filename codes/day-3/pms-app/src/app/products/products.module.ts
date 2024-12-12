import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SERVICE_TYPE, TOKEN_NAME } from '../utils/constants';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { SortProductPipe } from './pipes/sort-product.pipe';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { ProductSortComponent } from './components/product-sort/product-sort.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';

@NgModule({
  declarations: [
    ProductListComponent,
    FilterProductPipe,
    SortProductPipe,
    ProductContainerComponent,
    ProductSortComponent,
    ProductFilterComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: TOKEN_NAME,
      useClass: SERVICE_TYPE
    }
  ],
  exports: [ProductContainerComponent]
})
export class ProductsModule { }
