import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodGaugeComponent } from './good-gauge.component';

describe('GoodGaugeComponent', () => {
  let component: GoodGaugeComponent;
  let fixture: ComponentFixture<GoodGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
