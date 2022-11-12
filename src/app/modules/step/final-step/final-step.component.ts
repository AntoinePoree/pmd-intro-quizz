import { Component, OnInit } from '@angular/core';
import { StepsService } from 'src/app/core/services/steps.service';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-final-step',
  templateUrl: './final-step.component.html',
  styleUrls: ['./final-step.component.css'],
})
export class FinalStepComponent implements OnInit {
  result$ = this.stepsService.result$;
  nature$ = this.stepsService.nature$;
  pokemon$ = this.stepsService.pokemon$;

  description = '';

  constructor(
    public stepsService: StepsService,
    public storeService: StoreService
  ) {}

  ngOnInit() {
    this.setDescription();
  }

  setDescription() {
    console.log(this.storeService.natureDescription);
    this.nature$.subscribe((nature) => {
      this.description = this.storeService.natureDescription[nature];
    });
  }
}
