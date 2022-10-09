import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticalConstitutionComponent } from './political-constitution.component';

describe('PoliticalConstitutionComponent', () => {
  let component: PoliticalConstitutionComponent;
  let fixture: ComponentFixture<PoliticalConstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticalConstitutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticalConstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
