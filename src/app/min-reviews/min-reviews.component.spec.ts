import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinReviewsComponent } from './min-reviews.component';

describe('MinReviewsComponent', () => {
  let component: MinReviewsComponent;
  let fixture: ComponentFixture<MinReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
