import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaCreaeditaComponent } from './marca-creaedita.component';

describe('MarcaCreaeditaComponent', () => {
  let component: MarcaCreaeditaComponent;
  let fixture: ComponentFixture<MarcaCreaeditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcaCreaeditaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcaCreaeditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
