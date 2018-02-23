import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  successAlertMessage = 'This is the success message';
  warningAlertMessage = 'This is the warning message';
}
