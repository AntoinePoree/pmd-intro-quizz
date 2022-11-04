/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FinalStepComponent } from './final-step.component';

describe('FinalStepComponent', () => {
  let component: FinalStepComponent;
  let fixture: ComponentFixture<FinalStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
