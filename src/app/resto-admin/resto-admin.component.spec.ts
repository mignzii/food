import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoAdminComponent } from './resto-admin.component';

describe('RestoAdminComponent', () => {
  let component: RestoAdminComponent;
  let fixture: ComponentFixture<RestoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
