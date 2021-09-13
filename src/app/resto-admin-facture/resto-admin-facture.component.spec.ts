import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoAdminFactureComponent } from './resto-admin-facture.component';

describe('RestoAdminFactureComponent', () => {
  let component: RestoAdminFactureComponent;
  let fixture: ComponentFixture<RestoAdminFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoAdminFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoAdminFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
