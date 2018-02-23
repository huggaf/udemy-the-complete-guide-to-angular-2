import { Component, Input } from '@angular/core';

@Component({
  selector: 'warning_alert',
  templateUrl: './warning_alert.component.html',
  styleUrls: ['./warning_alert.component.css']
})
export class WarningAlert {
  @Input('message') message:string;
}
