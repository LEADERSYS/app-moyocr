import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSucursalesComponent } from './pages-sucursales.component';

describe('PagesSucursalesComponent', () => {
  let component: PagesSucursalesComponent;
  let fixture: ComponentFixture<PagesSucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSucursalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
