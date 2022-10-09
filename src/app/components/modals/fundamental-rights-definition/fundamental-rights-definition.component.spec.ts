import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentalRightsDefinitionComponent } from './fundamental-rights-definition.component';

describe('FundamentalRightsDefinitionComponent', () => {
  let component: FundamentalRightsDefinitionComponent;
  let fixture: ComponentFixture<FundamentalRightsDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundamentalRightsDefinitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundamentalRightsDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
