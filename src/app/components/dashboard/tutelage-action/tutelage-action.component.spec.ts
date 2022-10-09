import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutelageActionComponent } from './tutelage-action.component';

describe('TutelageActionComponent', () => {
  let component: TutelageActionComponent;
  let fixture: ComponentFixture<TutelageActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutelageActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutelageActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
