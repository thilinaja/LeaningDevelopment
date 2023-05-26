import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantdevelopmentCardComponent } from './consultantdevelopment-card.component';

describe('ConsultantdevelopmentCardComponent', () => {
  let component: ConsultantdevelopmentCardComponent;
  let fixture: ComponentFixture<ConsultantdevelopmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantdevelopmentCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultantdevelopmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
