import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }} </h3>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  <!-- <button (click)="decreaseBy(1)">-1</button> -->
  `
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy( value: number ): void {
    //this.counter += 1;
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }

  // decreaseBy( value: number ): void {
  //   this.counter -= value;
  // }
}
