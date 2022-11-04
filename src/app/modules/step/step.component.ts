import { StepsService } from './../../core/services/steps.service';
import { Component, OnInit, Input } from '@angular/core';
import { IQuestion } from 'src/app/core/models/question';
import { take } from 'rxjs';
import { Steps } from 'src/app/core/enums/steps';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css'],
})
export class StepComponent implements OnInit {
  @Input() questions: IQuestion[] = [];
  currentStep$ = this.stepsService.currentStep$;
  Steps = Steps;

  constructor(public stepsService: StepsService) {}

  ngOnInit() {
    this.stepsService.currentStep$
      .pipe(take(1))
      .subscribe((currentStep) => console.log(currentStep));
  }
}
