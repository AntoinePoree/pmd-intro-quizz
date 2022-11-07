import { Injectable } from '@angular/core';
import { getLanguage } from 'src/app/shared/utils/utils';
import { environment } from 'src/environments/environment';
import { IQuestion } from '../models/question';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  questions: IQuestion[] = [];
  natures: string[] = [];
  natureToPokemon: any[] = [];
  natureDescription: any[] = [];
  basics: any[] = [];

  constructor(private http: HttpClient) {}

  async getAndSetAll() {
    const langage = getLanguage();
    // const allUrl = [
    //   'natures',
    //   'questions',
    //   'naturetopokemon',
    //   'naturedescription',
    //   'basics',
    // ];

    // let dd = this.http.get(`assets/lang/${langage}/natures.json`);
    // let ss = this.http.get(`assets/lang/${langage}/questions.json`);
    // let xx = this.http.get(`assets/lang/${langage}/naturetopokemon.json`);
    // let qq = this.http.get(`assets/lang/${langage}/naturedescription.json`);
    // let vv = this.http.get(`assets/lang/${langage}/basics.json`);

    // forkJoin([dd, ss, xx, qq, vv]).subscribe((results) => {
    //   console.log(results);

    //   this.natures = results[0] as Array<string>;
    //   this.questions = results[1] as Array<IQuestion>;
    //   this.natureToPokemon = results[2] as Array<string>;
    //   this.natureDescription = results[3] as Array<string>;
    //   this.basics = results[4] as Array<string>;
    // });

    // allUrl.map((obj) =>
    //   forkJoin({
    //     [obj]: this.http.get(`assets/lang/${langage}/${obj}.json`),
    //     [obj]: this.http.get(`assets/lang/${langage}/${obj}.json`),
    //     [obj]: this.http.get(`assets/lang/${langage}/${obj}.json`),
    //     [obj]: this.http.get(`assets/lang/${langage}/${obj}.json`),
    //     [obj]: this.http.get(`assets/lang/${langage}/${obj}.json`),
    //   }).subscribe({
    //     next: (res) => {
    //       console.log(res, obj);
    //       // use `res`
    //     },
    //     error: (err) => {},
    //   })
    // );

    // this.http
    //   .get(`assets/lang/${langage}/natures.json`)
    //   .subscribe((data: any) => {
    //     console.log(data);
    //   });

    const [natures, questions, natureToPokemon, natureDescription, basics] =
      await Promise.all([
        fetch(`${environment.baseUrl}lang/${langage}/natures.json`).then(
          (res) => res.json()
        ),
        fetch(`${environment.baseUrl}lang/${langage}/questions.json`).then(
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
    return { natures, questions, natureToPokemon, natureDescription, basics };
  }
}
