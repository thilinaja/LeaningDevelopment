import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftskillsComponent } from './microsoftskills.component';

describe('MicrosoftskillsComponent', () => {
  let component: MicrosoftskillsComponent;
  let fixture: ComponentFixture<MicrosoftskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrosoftskillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicrosoftskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
