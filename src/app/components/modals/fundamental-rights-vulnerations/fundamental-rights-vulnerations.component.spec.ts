import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentalRightsVulnerationsComponent } from './fundamental-rights-vulnerations.component';

describe('FundamentalRightsVulnerationsComponent', () => {
  let component: FundamentalRightsVulnerationsComponent;
  let fixture: ComponentFixture<FundamentalRightsVulnerationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundamentalRightsVulnerationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundamentalRightsVulnerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
