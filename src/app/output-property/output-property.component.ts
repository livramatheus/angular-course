import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {

  @Input() value: number = 0;
  initialValue: number = 15;

  @Output() valueChanged = new EventEmitter();

  @ViewChild('inputField', {static: false}) fieldInputValue!: ElementRef;

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

  incrementRef() {
    console.log(this.fieldInputValue);
    this.fieldInputValue.nativeElement.value ++;
    this.valueChanged.emit({
      newValue: this.value
    });
  }

  decrementRef() {
    console.log(this.fieldInputValue);
    this.fieldInputValue.nativeElement.value --;
    this.valueChanged.emit({
      newValue: this.value
    });
  }
}
