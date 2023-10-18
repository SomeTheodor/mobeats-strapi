import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStoryComponent } from './card-story.component';

describe('CardStoryComponent', () => {
  let component: CardStoryComponent;
  let fixture: ComponentFixture<CardStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardStoryComponent]
    });
    fixture = TestBed.createComponent(CardStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
