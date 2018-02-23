import { Component, Input } from '@angular/core';

@Component({
  selector: 'success-alert',
  template: `
    <div class="alert alert-success" role="alert" *ngIf="message">
      {{ message }}
      <div *ngIf="warningMessage">
        <hr/>
        <warning-alert [message]="warningMessage"></warning-alert>
      </div>
    </div>`
})
export class SuccessAlertComponent {
  @Input('message') message:string;
  @Input('warning') warningMessage:string;
}
