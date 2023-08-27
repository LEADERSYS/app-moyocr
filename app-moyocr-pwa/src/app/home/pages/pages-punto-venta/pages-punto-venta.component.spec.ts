import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesPuntoVentaComponent } from './pages-punto-venta.component';

describe('PagesPuntoVentaComponent', () => {
  let component: PagesPuntoVentaComponent;
  let fixture: ComponentFixture<PagesPuntoVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesPuntoVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesPuntoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
