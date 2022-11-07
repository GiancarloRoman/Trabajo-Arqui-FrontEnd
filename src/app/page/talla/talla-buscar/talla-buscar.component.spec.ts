import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallaBuscarComponent } from './talla-buscar.component';

describe('TallaBuscarComponent', () => {
  let component: TallaBuscarComponent;
  let fixture: ComponentFixture<TallaBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallaBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallaBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
