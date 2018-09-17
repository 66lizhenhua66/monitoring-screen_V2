import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiBarComponent } from './kpi-bar.component';

describe('KpiBarComponent', () => {
  let component: KpiBarComponent;
  let fixture: ComponentFixture<KpiBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
