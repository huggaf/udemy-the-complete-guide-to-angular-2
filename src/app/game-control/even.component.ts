import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  template: '<p>EVEN - {{ number }}</p>',
  styles: ['p{color: blue;}']
})
export class EvenComponent{
  @Input('number') number: number;
  constructor() { }
}
