import { Inject, LOCALE_ID } from '@angular/core';
import { Injectable } from '@angular/core';
import { IQuestion } from '../models/question';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private questions: Promise<IQuestion[]> = import(
    `../../../assets/lang/${this.locale}/questions.json`
  );
  constructor(@Inject(LOCALE_ID) public locale: string) {
    console.log(this.questions);
  }

  getData() {
    return this.questions;
  }
}
