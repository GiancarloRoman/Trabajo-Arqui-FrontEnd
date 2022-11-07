import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaBuscarComponent } from './marca-buscar.component';

describe('MarcaBuscarComponent', () => {
  let component: MarcaBuscarComponent;
  let fixture: ComponentFixture<MarcaBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcaBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcaBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
