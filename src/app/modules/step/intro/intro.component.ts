import { IBasic } from './../../../core/models/basics';
import { Component, OnInit } from '@angular/core';
import { StepsService } from 'src/app/core/services/steps.service';
import { StoreService } from 'src/app/core/services/store.service';
import { Steps } from 'src/app/core/enums/steps';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  description: any;

  descriptionIndex: number = 0;

  constructor(
    public stepsService: StepsService,
    public storeService: StoreService
  ) {}

  ngOnInit() {
    this.description = this.getDescriptions(this.storeService.basics);
  }

  getDescriptions(description: IBasic) {
    const descriptions = [];
    const sentences = description.starter.split('.');

    for (let i = 0; i < sentences.length; i++) {
      if (i === sentences.length - 1) {
        descriptions.push(sentences[i]);
      } else {
        descriptions.push(sentences[i] + '...');
      }
    }
    return descriptions;
  }

  continue() {
    if (this.descriptionIndex + 1 === this.description.length) {
      this.playAudio();
      this.stepsService.changeStep(Steps.Question);
    } else this.descriptionIndex++;
  }

  playAudio() {
    let audio = new Audio();
    audio.src = '/assets/audio/quiz-music.ogg';
    audio.load();
    audio.play();
  }
}
