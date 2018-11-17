import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogReorderComponent } from './dialog-reorder.component';

describe('DialogReorderComponent', () => {
  let component: DialogReorderComponent;
  let fixture: ComponentFixture<DialogReorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogReorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogReorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
