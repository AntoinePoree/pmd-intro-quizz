import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './core/services/questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pmd-intro-quizz';
  constructor(public questionsService: QuestionsService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.questionsService.getData().then((res) => {
      console.log(res);
    });
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
