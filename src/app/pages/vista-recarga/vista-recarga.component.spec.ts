import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRecargaComponent } from './vista-recarga.component';

describe('VistaRecargaComponent', () => {
  let component: VistaRecargaComponent;
  let fixture: ComponentFixture<VistaRecargaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaRecargaComponent]
    });
    fixture = TestBed.createComponent(VistaRecargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
