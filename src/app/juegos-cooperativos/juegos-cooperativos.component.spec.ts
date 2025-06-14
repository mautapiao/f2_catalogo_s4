import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosCooperativosComponent } from './juegos-cooperativos.component';

describe('JuegosCooperativosComponent', () => {
  let component: JuegosCooperativosComponent;
  let fixture: ComponentFixture<JuegosCooperativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegosCooperativosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosCooperativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
