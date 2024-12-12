import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-sort',
  templateUrl: './product-sort.component.html',
  styleUrl: './product-sort.component.css'
})
export class ProductSortComponent {
  sortChoices = ['id', 'name', 'price', 'rating']
  choice = ''
  @Output() sortChoiceChanged = new EventEmitter<string>()
  updateChoice(text: string) {
    this.choice = text
    this.sortChoiceChanged.emit(this.choice)
  }
}
