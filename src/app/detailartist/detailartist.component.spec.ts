import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailartistComponent } from './detailartist.component';

describe('DetailartistComponent', () => {
  let component: DetailartistComponent;
  let fixture: ComponentFixture<DetailartistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailartistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
