import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListechanteursComponent } from './listechanteurs.component';

describe('ListechanteursComponent', () => {
  let component: ListechanteursComponent;
  let fixture: ComponentFixture<ListechanteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListechanteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListechanteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
