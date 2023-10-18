import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCycleComponent } from './full-cycle.component';

describe('FullCycleComponent', () => {
  let component: FullCycleComponent;
  let fixture: ComponentFixture<FullCycleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullCycleComponent]
    });
    fixture = TestBed.createComponent(FullCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
