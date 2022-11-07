import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaDialogoComponent } from './marca-dialogo.component';

describe('MarcaDialogoComponent', () => {
  let component: MarcaDialogoComponent;
  let fixture: ComponentFixture<MarcaDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcaDialogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcaDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
