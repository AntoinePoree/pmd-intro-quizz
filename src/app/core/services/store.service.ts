import { Injectable } from '@angular/core';
import { getLanguage } from 'src/app/shared/utils/utils';
import { environment } from 'src/environments/environment';
import { IQuestion } from '../models/question';
import { IBasic } from '../models/basics';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  questions: IQuestion[] = [];
  questionsGender: IQuestion[] = [];
  natures: string[] = [];
  natureToPokemon: any = {};
  natureDescription: any = {};
  basics: IBasic = { starter: '' };

  constructor() {}

  async getAndSetAll() {
    const langage = getLanguage();

    const [natures, questions, questionsGender, natureToPokemon, natureDescription, basics] =
      await Promise.all([
        fetch(`${environment.baseUrl}lang/${langage}/natures.json`).then(
          (res) => res.json()
        ),
        fetch(`${environment.baseUrl}lang/${langage}/questions.json`).then(
          (res) => res.json()
        ),
        fetch(`${environment.baseUrl}lang/${langage}/questions-gender.json`).then(
          (res) => res.json()
        ),
        fetch(
          `${environment.baseUrl}lang/${langage}/naturetopokemon.json`
        ).then((res) => res.json()),
        fetch(
          `${environment.baseUrl}lang/${langage}/naturedescription.json`
        ).then((res) => res.json()),
        fetch(`${environment.baseUrl}lang/${langage}/basics.json`).then((res) =>
          res.json()
        ),
      ]);

    this.natures = natures;
    this.questions = questions;
    this.questionsGender = questionsGender;
    this.natures = natures;
    this.natureToPokemon = natureToPokemon;
    this.natureDescription = natureDescription;
    this.basics = basics;

    // return {
    //   natures: this.natures,
    //   questions: this.questions,
    //   natureToPokemon: this.natureToPokemon,
    //   natureDescription: this.natureDescription,
    //   basics: this.basics,
    // };
    return { natures, questions, questionsGender, natureToPokemon, natureDescription, basics };
  }
}
