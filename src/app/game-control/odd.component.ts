import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  template: '<p>ODD - {{ number }}</p>',
  styles: ['p{color: red;}']
})
export class OddComponent{
  @Input('number') number: number;
  constructor() { }
}
