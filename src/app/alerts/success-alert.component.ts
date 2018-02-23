import { Component, Input } from '@angular/core';

@Component({
  selector: 'success-alert',
  template: `
    <div class="alert alert-success" role="alert" *ngIf="message">
      {{ message }}
    </div>`
})
export class SuccessAlertComponent {
  @Input('message') message:string;
}
