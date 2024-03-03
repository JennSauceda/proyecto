import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincessQuizPage } from './princess-quiz.page';

describe('PrincessQuizPage', () => {
  let component: PrincessQuizPage;
  let fixture: ComponentFixture<PrincessQuizPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrincessQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
