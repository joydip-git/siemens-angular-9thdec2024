import { Component, Inject } from '@angular/core';
import { Product } from '../../../models/product';
import { TOKEN_NAME } from '../../../utils/constants';
import { PmsAppServiceContract } from '../../../contracts/pmsappservicecontract';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[];
  filterText = ''
  sortChoices = ['id', 'name', 'price', 'rating']
  choice = ''

  constructor(@Inject(TOKEN_NAME) private ps: PmsAppServiceContract<Product>) {
    this.products = this.ps.getAll()
  }
  updateFilterText(text: string) {
    this.filterText = text
  }
  updateChoice(text: string) {
    this.choice = text
  }
}
