import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraBoletaComponent } from './registra-boleta.component';

describe('RegistraBoletaComponent', () => {
  let component: RegistraBoletaComponent;
  let fixture: ComponentFixture<RegistraBoletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraBoletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraBoletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
