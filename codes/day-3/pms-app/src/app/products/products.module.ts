import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SERVICE_TYPE, TOKEN_NAME } from '../utils/constants';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { SortProductPipe } from './pipes/sort-product.pipe';

@NgModule({
  declarations: [
    ProductListComponent,
    FilterProductPipe,
    SortProductPipe
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
  exports: [ProductListComponent]
})
export class ProductsModule { }