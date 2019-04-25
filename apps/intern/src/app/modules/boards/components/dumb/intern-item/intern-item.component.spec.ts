import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternItemComponent } from './intern-item.component';

describe('InternItemComponent', () => {
  let component: InternItemComponent;
  let fixture: ComponentFixture<InternItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
