import { StepsService } from './../../core/services/steps.service';
import { Component, OnInit, Input } from '@angular/core';
import { IQuestion, IScore } from 'src/app/core/models/question';
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

  ngOnInit() {}

  passedToNextStep(event: IScore[]) {
    console.log(event);
    this.stepsService.changeStep(Steps.Result);
  }
}
