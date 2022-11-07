import { ComponentsModule } from './../../shared/components/components.module';
import { QuestionComponent } from './question/question.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from './step.component';
import { FinalStepComponent } from './final-step/final-step.component';

@NgModule({
  imports: [CommonModule, ComponentsModule],
  declarations: [StepComponent, QuestionComponent, FinalStepComponent],
  exports: [StepComponent],
})
export class StepModule {}
