import { IResponse } from './../../../core/models/question';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-question',
  templateUrl: './button-question.component.html',
  styleUrls: ['./button-question.component.css'],
})
export class ButtonQuestionComponent {
  @Input() response!: IResponse;

  @Output() onClick = new EventEmitter<any>();

  onClickButton(event: IResponse) {
    const audio = new Audio('./assets/audio/select-sound.mp3');
    audio.play();
    this.onClick.emit(event);
  }
}
