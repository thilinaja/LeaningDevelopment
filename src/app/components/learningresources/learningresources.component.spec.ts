import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningresourcesComponent } from './learningresources.component';

describe('LearningresourcesComponent', () => {
  let component: LearningresourcesComponent;
  let fixture: ComponentFixture<LearningresourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningresourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
