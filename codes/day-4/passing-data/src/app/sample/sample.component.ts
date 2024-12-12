import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent implements OnChanges {
  @Input('tValue') titleValue = 'NA'
  welcomeMessage = 'Welcome ' + this.titleValue
  @Output('changeTitleValue') titleChange = new EventEmitter<{ name: string, value: string }>()

  constructor() {
    // this.welcomeMessage = 'Welcome ' + this.titleValue
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.welcomeMessage = 'Welcome ' + this.titleValue
  }

  triggerTitleChange(newTitle: string) {
    this.titleValue = newTitle
    this.titleChange.emit({ name: 'titleChange', value: this.titleValue })
  }
}
