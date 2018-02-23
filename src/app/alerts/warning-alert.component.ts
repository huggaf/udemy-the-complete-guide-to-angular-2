import { Component, Input } from '@angular/core';

@Component({
  selector: 'warning-alert',
  template: `
    <div class="alert alert-warning" role="alert" *ngIf="message">
      {{ message }}
    </div>`
})
export class WarningAlertComponent {
  @Input('message') message:string;
}
