import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestProgressBarComponent } from './request-progress-bar.component';

describe('RequestProgressBarComponent', () => {
  let component: RequestProgressBarComponent;
  let fixture: ComponentFixture<RequestProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
