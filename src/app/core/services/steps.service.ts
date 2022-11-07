import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Steps } from '../enums/steps';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  private _currentStep: BehaviorSubject<any> = new BehaviorSubject(
    Steps.Question
  );
  public currentStep$: Observable<Steps> = this._currentStep.asObservable();

  changeStep(Step: Steps) {
    this._currentStep.next(Step);
  }
}
