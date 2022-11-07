import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaDialogoComponent } from './tienda-dialogo.component';

describe('TiendaDialogoComponent', () => {
  let component: TiendaDialogoComponent;
  let fixture: ComponentFixture<TiendaDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaDialogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
