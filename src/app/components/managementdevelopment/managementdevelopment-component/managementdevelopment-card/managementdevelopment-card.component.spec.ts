import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementdevelopmentCardComponent } from './managementdevelopment-card.component';

describe('ManagementdevelopmentCardComponent', () => {
  let component: ManagementdevelopmentCardComponent;
  let fixture: ComponentFixture<ManagementdevelopmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementdevelopmentCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementdevelopmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
