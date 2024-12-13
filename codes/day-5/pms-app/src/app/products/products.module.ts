import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SERVICE_TYPE, TOKEN_NAME } from '../utils/constants';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { SortProductPipe } from './pipes/sort-product.pipe';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { ProductSortComponent } from './components/product-sort/product-sort.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { RouterModule } from '@angular/router';
import { productRoutes } from '../routes/routes';

@NgModule({
  declarations: [
    ProductListComponent,
    FilterProductPipe,
    SortProductPipe,
    ProductContainerComponent,
    ProductSortComponent,
    ProductFilterComponent,
    AddProductComponent,
    UpdateProductComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(productRoutes)
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
