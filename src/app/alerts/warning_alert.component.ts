import { Component, Input } from '@angular/core';

@Component({
  selector: 'warning-alert',
  templateUrl: './warning_alert.component.html',
  styleUrls: ['./warning_alert.component.css']
})
export class WarningAlertComponent {
  @Input('message') message:string;
}
