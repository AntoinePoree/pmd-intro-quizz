import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IQuestion, IResponse, IScore } from 'src/app/core/models/question';
import { StoreService } from 'src/app/core/services/store.service';
import { transition, style, animate, trigger } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate(
    '1.5s ease-in',
    style({
      opacity: 1,
    })
  ),
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1,
  }),
  animate(
    '0.2s ease-out',
    style({
      opacity: 0,
    })
  ),
]);

const fadeIn = trigger('fadeIn', [enterTransition]);

const fadeOut = trigger('fadeOut', [leaveTrans]);
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  animations: [fadeIn, fadeOut],
})
export class QuestionComponent implements OnInit {
  @Input() allQuestions: IQuestion[] = [];

  @Output() passedToNextStep = new EventEmitter<IScore[]>();

  questionIndex: number = 0;
  scoreByNature: IScore[] = [];

  constructor(public storeService: StoreService) {}

  ngOnInit() {
    this.storeService.natures.map((nature) => {
      this.scoreByNature.push({ nature, points: 0 });
    });
  }

  newResponseChosen(event: IResponse) {
    this.addScore(event.scores);

    if (this.questionIndex + 1 === this.allQuestions.length) {
      this.passedToNextStep.emit(this.scoreByNature);
    } else this.questionIndex++;
  }

  addScore(scores: IScore[]) {
    scores.map((score) => {
      const scoreToAddByNature = this.scoreByNature.find(
        ({ nature }) => nature === score.nature
      );

      if (scoreToAddByNature) {
        scoreToAddByNature.points = score.points + scoreToAddByNature.points;
      }
    });
  }
}
