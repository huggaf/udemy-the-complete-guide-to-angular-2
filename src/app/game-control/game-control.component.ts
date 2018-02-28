import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  template: `
    <button
      class="btn"
      [class.btn-success]="!active"
      [class.btn-danger]="active"
      (click)="toggleGame()">
        {{active && 'Stop!' || 'Go!'}}
    </button>
  `,
  styles: []
})
export class GameControlComponent{
  public active: boolean = false;
  private number: number = 0;
  private timer: NodeJS.Timer;

  @Output() tick: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  onTick(){
    this.number++;
    this.tick.emit(this.number);
  }

  start(){
    if(this.active){ return }
    this.active = true;
    this.onTick();
    this.timer = setInterval(() => this.onTick(), 1000);
    return;
  }

  stop(){
    if(!this.active){ return }
    this.active = false;
    clearInterval(this.timer);
    return;
  }

  toggleGame(){
    this.active ? this.stop() : this.start()
  }

}
