import { Component, OnInit } from '@angular/core';
import { Steps } from './core/enums/steps';
import { IQuestion } from './core/models/question';
import { StoreService } from './core/services/store.service';
import { StepsService } from './core/services/steps.service';
import { transition, style, animate, trigger } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate(
    '2s ease-in',
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
    '1s ease-out',
    style({
      opacity: 0,
    })
  ),
]);

const fadeIn = trigger('fadeIn', [enterTransition]);

const fadeOut = trigger('fadeOut', [leaveTrans]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeIn, fadeOut],
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

  shuffleAndCut(array: IQuestion[]): IQuestion[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.splice(0, 10);
  }
}
