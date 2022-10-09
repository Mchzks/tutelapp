import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionRightsDefinitionComponent } from './petition-rights-definition.component';

describe('PetitionRightsDefinitionComponent', () => {
  let component: PetitionRightsDefinitionComponent;
  let fixture: ComponentFixture<PetitionRightsDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetitionRightsDefinitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitionRightsDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
