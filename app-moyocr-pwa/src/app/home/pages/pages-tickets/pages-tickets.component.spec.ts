import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesTicketsComponent } from './pages-tickets.component';

describe('PagesTicketsComponent', () => {
  let component: PagesTicketsComponent;
  let fixture: ComponentFixture<PagesTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
