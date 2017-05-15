import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefrefComponent } from './--defref.component';

describe('DefrefComponent', () => {
  let component: DefrefComponent;
  let fixture: ComponentFixture<DefrefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefrefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
