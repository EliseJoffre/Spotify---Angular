import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailplaylistComponent } from './detailplaylist.component';

describe('DetailplaylistComponent', () => {
  let component: DetailplaylistComponent;
  let fixture: ComponentFixture<DetailplaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailplaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
