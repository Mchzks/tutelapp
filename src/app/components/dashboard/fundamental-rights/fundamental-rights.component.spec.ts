import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentalRightsComponent } from './fundamental-rights.component';

describe('FundamentalRightsComponent', () => {
  let component: FundamentalRightsComponent;
  let fixture: ComponentFixture<FundamentalRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundamentalRightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundamentalRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
