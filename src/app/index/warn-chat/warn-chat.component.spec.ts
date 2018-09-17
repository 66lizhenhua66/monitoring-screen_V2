import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarnChatComponent } from './warn-chat.component';

describe('WarnChatComponent', () => {
  let component: WarnChatComponent;
  let fixture: ComponentFixture<WarnChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarnChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarnChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
