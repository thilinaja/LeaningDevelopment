import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpersonalskillsCardComponent } from './interpersonalskills-card.component';

describe('InterpersonalskillsCardComponent', () => {
  let component: InterpersonalskillsCardComponent;
  let fixture: ComponentFixture<InterpersonalskillsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpersonalskillsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpersonalskillsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
