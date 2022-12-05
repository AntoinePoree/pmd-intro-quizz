import { Component, HostListener, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/core/animations/fadeFast';
import { Steps } from 'src/app/core/enums/steps';
import { StepsService } from 'src/app/core/services/steps.service';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-final-step',
  templateUrl: './final-step.component.html',
  styleUrls: ['./final-step.component.scss'],
  animations: [fadeIn],
})
export class FinalStepComponent implements OnInit {
  result$ = this.stepsService.result$;
  nature$ = this.stepsService.nature$;
  pokemon$ = this.stepsService.pokemon$;

  description: any;
  descriptionIndex: number = 0;

  constructor(
    public stepsService: StepsService,
    public storeService: StoreService
  ) { }

  @HostListener('document:click', ['$event'])
    documentClick(event: MouseEvent) {
      this.continue()
    }

  ngOnInit() {
    this.setDescription()
  }

  setDescription() {
    this.nature$.subscribe((nature) => {
      nature = 'Intrépide'
      this.description = this.getDescriptions(this.storeService.natureDescription[nature]);
    });
  }


  getDescriptions(description: string): string[] {
    const descriptions = [];
    const sentences = description.split('.');

    for (let i = 0; i < sentences.length; i++) {
      console.log(sentences[i], sentences.length - 1);

      const lastWord = sentences[i].split(' ').pop();

      if (i === sentences.length - 1, lastWord === '!') {
        descriptions.push(sentences[i]);
      }  else {
        descriptions.push(sentences[i] + '...');
      }
    }
    console.log(descriptions);

    return descriptions;
  }

  continue() {
    if (this.descriptionIndex + 1 === this.description.length) {
      this.stepsService.changeStep(Steps.Intro);
    } else this.descriptionIndex++;
  }

}
