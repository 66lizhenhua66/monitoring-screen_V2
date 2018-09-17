import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectryPieComponent } from './electry-pie.component';

describe('ElectryPieComponent', () => {
  let component: ElectryPieComponent;
  let fixture: ComponentFixture<ElectryPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectryPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectryPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
