import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoAdminCommandeComponent } from './resto-admin-commande.component';

describe('RestoAdminCommandeComponent', () => {
  let component: RestoAdminCommandeComponent;
  let fixture: ComponentFixture<RestoAdminCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoAdminCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoAdminCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
