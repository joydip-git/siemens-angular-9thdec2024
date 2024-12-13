import { Injectable } from '@angular/core';
import { PmsAppServiceContract } from '../../contracts/pmsappservicecontract';
import { Product } from '../../models/product';
import { productRecords } from '../../data/productrecords';

@Injectable()
export class ProductService implements PmsAppServiceContract<Product> {
  get(id: number): Product | undefined {
    return productRecords.find(p => p.productId === id)
  }

  getAll(): Product[] {
    return productRecords
  }
}
