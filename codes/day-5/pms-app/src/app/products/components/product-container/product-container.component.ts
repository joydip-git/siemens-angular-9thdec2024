import { Component } from '@angular/core';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.css'
})
export class ProductContainerComponent {
  filterValue = ''
  choice = ''
  updateFilterValue(text: string) {
    this.filterValue = text
  }
  updateChoice(text: string) {
    this.choice = text
  }
}
