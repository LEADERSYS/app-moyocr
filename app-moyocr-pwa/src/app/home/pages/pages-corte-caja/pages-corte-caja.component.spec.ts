import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesCorteCajaComponent } from './pages-corte-caja.component';

describe('PagesCorteCajaComponent', () => {
  let component: PagesCorteCajaComponent;
  let fixture: ComponentFixture<PagesCorteCajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesCorteCajaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesCorteCajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
