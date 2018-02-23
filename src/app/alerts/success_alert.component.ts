import { Component, Input } from '@angular/core';

@Component({
  selector: 'success-alert',
  templateUrl: './success_alert.component.html',
  styleUrls: ['./success_alert.component.css']
})
export class SuccessAlertComponent {
  @Input('message') message:string;
}
