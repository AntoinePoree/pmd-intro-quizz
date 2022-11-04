import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string = '';
  @Output() onClick = new EventEmitter<any>();

  onClickButton(event: string) {
    const audio = new Audio('./assets/audio/select-sound.mp3');
    audio.play();
    this.onClick.emit(event);
  }

  constructor() {}

  ngOnInit() {
    console.log(this);
  }
}
