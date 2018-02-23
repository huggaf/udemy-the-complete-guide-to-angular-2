import { Component, Input } from '@angular/core';

@Component({
  selector: 'success_alert',
  templateUrl: './success_alert.component.html',
  styleUrls: ['./success_alert.component.css']
})
export class SuccessAlert {
  @Input('message') message:string;
}
