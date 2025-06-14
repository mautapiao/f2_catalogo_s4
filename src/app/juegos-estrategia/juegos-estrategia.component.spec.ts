import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosEstrategiaComponent } from './juegos-estrategia.component';

describe('JuegosEstrategiaComponent', () => {
  let component: JuegosEstrategiaComponent;
  let fixture: ComponentFixture<JuegosEstrategiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegosEstrategiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosEstrategiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
