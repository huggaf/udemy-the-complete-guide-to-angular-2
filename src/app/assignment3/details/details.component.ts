import { Component } from '@angular/core';

@Component({
  selector: 'assignment3-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent{
  logs: Date[] = [];
  isOpen: boolean = false;

  onClick(){
    this.isOpen = !this.isOpen;
    this.logs.push(new Date());
  }

}
