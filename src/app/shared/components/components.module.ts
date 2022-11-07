import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonQuestionComponent } from './button-question/button-question.component';
import { TextBoxComponent } from './text-box/text-box.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonQuestionComponent, TextBoxComponent],
  exports: [ButtonQuestionComponent, TextBoxComponent],
})
export class ComponentsModule {}
