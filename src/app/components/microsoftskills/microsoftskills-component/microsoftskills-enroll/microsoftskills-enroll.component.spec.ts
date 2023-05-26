import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftskillsEnrollComponent } from './microsoftskills-enroll.component';

describe('MicrosoftskillsEnrollComponent', () => {
  let component: MicrosoftskillsEnrollComponent;
  let fixture: ComponentFixture<MicrosoftskillsEnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrosoftskillsEnrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicrosoftskillsEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
