import { Injectable } from '@angular/core';
import { PmsAppServiceContract } from '../../contracts/pmsappservicecontract';
import { Product } from '../../models/product';
import { productRecords } from '../../data/productrecords';

@Injectable()
export class ProductService implements PmsAppServiceContract<Product> {

  getAll(): Product[] {
    return productRecords
  }
}
