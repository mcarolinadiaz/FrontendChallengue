import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshNewsComponent } from './fresh-news.component';

describe('FreshNewsComponent', () => {
  let component: FreshNewsComponent;
  let fixture: ComponentFixture<FreshNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreshNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
