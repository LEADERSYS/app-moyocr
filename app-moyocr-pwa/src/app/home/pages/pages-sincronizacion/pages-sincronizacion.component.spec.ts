import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSincronizacionComponent } from './pages-sincronizacion.component';

describe('PagesSincronizacionComponent', () => {
  let component: PagesSincronizacionComponent;
  let fixture: ComponentFixture<PagesSincronizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSincronizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesSincronizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
