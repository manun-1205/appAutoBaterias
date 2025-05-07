import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaPrincipalComponentComponent } from './VentanaPrincipal.component';

describe('VentanaPrincipalComponentComponent', () => {
  let component: VentanaPrincipalComponentComponent;
  let fixture: ComponentFixture<VentanaPrincipalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentanaPrincipalComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanaPrincipalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
