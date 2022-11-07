import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IQuestion, IResponse, IScore } from 'src/app/core/models/question';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
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
