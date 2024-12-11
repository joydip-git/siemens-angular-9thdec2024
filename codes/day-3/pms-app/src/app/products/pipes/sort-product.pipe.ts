import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../models/product';

@Pipe({
  name: 'sortProduct'
})
export class SortProductPipe implements PipeTransform {

  transform(value: Product[], ...args: string[]): Product[] {
    if (value.length > 0 && args[0] && args[0] !== '') {
      switch (args[0]) {
        case 'id':
          value.sort(
            (p1, p2) => {
              return p1.productId - p2.productId
            }
          )
          break;

        case 'name':
          value.sort(
            (p1, p2) => {
              return p1.productName.toLocaleLowerCase().localeCompare(p2.productName.toLocaleLowerCase())
            }
          )
          break;

        case 'price':
          value.sort(
            (p1, p2) => {
              return p1.price - p2.price
            }
          )
          break;

        case 'rating':
          value.sort(
            (p1, p2) => {
              return p1.starRating - p2.starRating
            }
          )
          break;

        default:
          break;
      }
    }
    return value
  }
}
