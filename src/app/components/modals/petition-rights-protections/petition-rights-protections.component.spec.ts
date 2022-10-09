import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionRightsProtectionsComponent } from './petition-rights-protections.component';

describe('PetitionRightsProtectionsComponent', () => {
  let component: PetitionRightsProtectionsComponent;
  let fixture: ComponentFixture<PetitionRightsProtectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetitionRightsProtectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitionRightsProtectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
