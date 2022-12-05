import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Steps } from '../enums/steps';
import { IScore } from '../models/question';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  private _currentStep: BehaviorSubject<any> = new BehaviorSubject(Steps.Intro);
  private _result: BehaviorSubject<Array<IScore>> = new BehaviorSubject(
    [] as Array<IScore>
  );
  private _nature: BehaviorSubject<string> = new BehaviorSubject('');
  private _pokemon: BehaviorSubject<string> = new BehaviorSubject('');

  public currentStep$: Observable<Steps> = this._currentStep.asObservable();
  public result$: Observable<Array<IScore>> = this._result.asObservable();
  public nature$: Observable<string> = this._nature.asObservable();
  public pokemon$: Observable<string> = this._pokemon.asObservable();

  constructor(private storeService: StoreService) {}

  changeStep(Step: Steps) {
    this._currentStep.next(Step);
  }

  setResult(result: IScore[]) {
    this.setNature(result);
    this._result.next(result);
  }

  setNature(scores: IScore[]) {
    const highest = scores.sort((a, b) => b.points - a.points)[0];
    const pkm = this.storeService.natureToPokemon[highest.nature];

    this._nature.next(highest.nature);
    this._pokemon.next(this.transformToEnglishFormat(pkm));
  }

  private transformToEnglishFormat(pkm: string): string {
    console.log(pkm);

    return pkm
  }
}
