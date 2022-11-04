import { Component, OnInit } from '@angular/core';
import { Steps } from './core/enums/steps';
import { IQuestion } from './core/models/question';
import { QuestionsService } from './core/services/questions.service';
import { StepsService } from './core/services/steps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pmd-intro-quizz';
  questions: IQuestion[] = [];
  Steps = Steps;
  currentStep$ = this.stepsService.currentStep$;

  constructor(
    public questionsService: QuestionsService,
    public stepsService: StepsService
  ) {}

  ngOnInit(): void {
    this.questionsService
      .getQuestionsByLangage()
      .then((questions) => {
        this.questions = questions;
      })
      .catch((err) => console.log(err));
  }

  emitButton(event: string) {
    console.log('functioncall', event);
    this.stepsService.changeStep(Steps.Result);
  }

  // playAudio() {
  //   const promise = document.querySelector('video').play();

  //   if (promise !== undefined) {
  //     promise
  //       .then((_) => {
  //         let audio = new Audio();
  //         audio.src = 'src/assets/audio/quiz-music.ogg';
  //         audio.load();
  //         audio.play();
  //       })
  //       .catch((error) => {
  //         // Autoplay was prevented.
  //         // Show a "Play" button so that user can start playback.
  //       });
  //   }
  // }
}
