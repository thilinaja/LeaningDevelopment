import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpersonalskillsComponent } from './interpersonalskills.component';

describe('InterpersonalskillsComponent', () => {
  let component: InterpersonalskillsComponent;
  let fixture: ComponentFixture<InterpersonalskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpersonalskillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpersonalskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
