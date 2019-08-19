import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketTilesComponent } from './ticket-tiles.component';

describe('TicketTilesComponent', () => {
  let component: TicketTilesComponent;
  let fixture: ComponentFixture<TicketTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
