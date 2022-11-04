import { Inject, LOCALE_ID } from '@angular/core';
import { Injectable } from '@angular/core';
import { IQuestion } from '../models/question';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(@Inject(LOCALE_ID) public locale: string) {}

  getQuestionsByLangage(): Promise<IQuestion[]> {
    return import(`../../../assets/lang/${this.locale}/questions.json`);
  }
}
