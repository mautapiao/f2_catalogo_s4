import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosFamiliaresComponent } from './juegos-familiares.component';

describe('JuegosFamiliaresComponent', () => {
  let component: JuegosFamiliaresComponent;
  let fixture: ComponentFixture<JuegosFamiliaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegosFamiliaresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosFamiliaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
