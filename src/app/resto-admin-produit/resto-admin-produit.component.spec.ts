import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoAdminProduitComponent } from './resto-admin-produit.component';

describe('RestoAdminProduitComponent', () => {
  let component: RestoAdminProduitComponent;
  let fixture: ComponentFixture<RestoAdminProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoAdminProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoAdminProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
