import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {

  @Input() value: number = 0;
  initialValue: number = 15;

  @Output() valueChanged = new EventEmitter();

  increment() {
    this.value ++;
    this.valueChanged.emit({
      newValue: this.value
    });
  }

  decrement() {
    this.value --;
    this.valueChanged.emit({
      newValue: this.value
    });
  }
}
