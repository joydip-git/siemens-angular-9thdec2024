import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../../models/product";

@Pipe({ name: 'filterproduct' })
export class FilterProductPipe implements PipeTransform {
    transform(value: Product[], ...args: string[]): Product[] {
        console.log('entering pipe..' + (args[0] === '' ? 'NA' : args[0]));
        if (args[0] && args[0] !== '' && value.length > 0) {
            return value.filter(
                (p: Product) => p.productName
                    .toLocaleLowerCase()
                    .includes(args[0].toLocaleLowerCase())
            )
        } else
            return value
    }
}