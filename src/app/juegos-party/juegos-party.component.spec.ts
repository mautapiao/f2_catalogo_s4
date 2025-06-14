import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosPartyComponent } from './juegos-party.component';

describe('JuegosPartyComponent', () => {
  let component: JuegosPartyComponent;
  let fixture: ComponentFixture<JuegosPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegosPartyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
