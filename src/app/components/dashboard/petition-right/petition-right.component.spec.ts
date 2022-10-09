import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionRightComponent } from './petition-right.component';

describe('PetitionRightComponent', () => {
  let component: PetitionRightComponent;
  let fixture: ComponentFixture<PetitionRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetitionRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitionRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
