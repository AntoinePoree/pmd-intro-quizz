import { Component, OnInit } from '@angular/core';
import { Steps } from './core/enums/steps';
import { IQuestion } from './core/models/question';
import { StoreService } from './core/services/store.service';
import { StepsService } from './core/services/steps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  questions: IQuestion[] = [];
  natures: any[] = [];
  natureToPokemon: any[] = [];
  natureDescription: any[] = [];
  basics: any[] = [];

  Steps = Steps;
  currentStep$ = this.stepsService.currentStep$;

  constructor(
    public storeService: StoreService,
    public stepsService: StepsService
  ) {}

  ngOnInit(): void {
    this.storeService
      .getAndSetAll()
      .then((data) => {
        this.questions = this.shuffleAndCut(data.questions);
        this.natures = data.natures;
        this.natureToPokemon = data.natureToPokemon;
        this.natureDescription = data.natureDescription;
        this.basics = data.basics;
      })
      .catch((err) => console.log(err));
  }

  playAudio() {
    let audio = new Audio();
    audio.src = '/assets/audio/quiz-music.ogg';
    audio.load();
    audio.play();
  }

  shuffleAndCut(array: IQuestion[]): IQuestion[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.splice(0, 10);
  }
}
