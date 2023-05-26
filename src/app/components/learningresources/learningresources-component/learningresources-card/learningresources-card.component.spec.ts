import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningresourcesCardComponent } from './learningresources-card.component';

describe('LearningresourcesCardComponent', () => {
  let component: LearningresourcesCardComponent;
  let fixture: ComponentFixture<LearningresourcesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningresourcesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningresourcesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
