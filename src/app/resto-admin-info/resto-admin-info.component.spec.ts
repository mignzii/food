import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoAdminInfoComponent } from './resto-admin-info.component';

describe('RestoAdminInfoComponent', () => {
  let component: RestoAdminInfoComponent;
  let fixture: ComponentFixture<RestoAdminInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoAdminInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoAdminInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
