import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaCreaeditaComponent } from './tienda-creaedita.component';

describe('TiendaCreaeditaComponent', () => {
  let component: TiendaCreaeditaComponent;
  let fixture: ComponentFixture<TiendaCreaeditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaCreaeditaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaCreaeditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
