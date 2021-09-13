import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoGestionComponent } from './resto-gestion.component';

describe('RestoGestionComponent', () => {
  let component: RestoGestionComponent;
  let fixture: ComponentFixture<RestoGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
