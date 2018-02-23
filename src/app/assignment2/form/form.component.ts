import { Component } from '@angular/core';

@Component({
  selector: 'assignment2-form',
  template: `
  <div class="form-group">
    <input [(ngModel)]="username" (keydown.enter)="saveUsername()" />

    <p>{{ username }}</p>
  </div>

  <div class="form-group">
    <button class="btn btn-primary" [disabled]="!username" (click)="saveUsername()">Save</button>
  </div>
  `
})
export class FormComponent{
  username: string;

  saveUsername(){
    if(!this.username){ return }
    console.log('saving...')
    this.username = undefined;
  }
}
