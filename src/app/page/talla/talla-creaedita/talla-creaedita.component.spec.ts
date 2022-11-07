import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallaCreaeditaComponent } from './talla-creaedita.component';

describe('TallaCreaeditaComponent', () => {
  let component: TallaCreaeditaComponent;
  let fixture: ComponentFixture<TallaCreaeditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallaCreaeditaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallaCreaeditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
