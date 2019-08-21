import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyCOneComponent } from './lazy-cone.component';

describe('LazyCOneComponent', () => {
  let component: LazyCOneComponent;
  let fixture: ComponentFixture<LazyCOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyCOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyCOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
