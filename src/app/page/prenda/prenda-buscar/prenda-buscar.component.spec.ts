import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrendaBuscarComponent } from './prenda-buscar.component';

describe('PrendaBuscarComponent', () => {
  let component: PrendaBuscarComponent;
  let fixture: ComponentFixture<PrendaBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrendaBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrendaBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
