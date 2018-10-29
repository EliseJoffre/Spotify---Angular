import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeplaylistComponent } from './listeplaylist.component';

describe('ListeplaylistComponent', () => {
  let component: ListeplaylistComponent;
  let fixture: ComponentFixture<ListeplaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeplaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
