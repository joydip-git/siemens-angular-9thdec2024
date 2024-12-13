import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css'
})
export class ProductFilterComponent {
  filterText = ''
  @Output() filterTextChanged = new EventEmitter<string>()

  changeFilterText(text: string) {
    this.filterText = text
    this.filterTextChanged.emit(this.filterText)
  }
}
