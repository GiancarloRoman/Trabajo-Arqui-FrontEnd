import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallaDialogoComponent } from './talla-dialogo.component';

describe('TallaDialogoComponent', () => {
  let component: TallaDialogoComponent;
  let fixture: ComponentFixture<TallaDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallaDialogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallaDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
