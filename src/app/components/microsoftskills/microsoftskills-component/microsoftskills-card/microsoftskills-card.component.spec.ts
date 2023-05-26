import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftskillsCardComponent } from './microsoftskills-card.component';

describe('MicrosoftskillsCardComponent', () => {
  let component: MicrosoftskillsCardComponent;
  let fixture: ComponentFixture<MicrosoftskillsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrosoftskillsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicrosoftskillsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
