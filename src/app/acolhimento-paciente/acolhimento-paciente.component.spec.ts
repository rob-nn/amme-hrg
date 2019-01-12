import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcolhimentoPacienteComponent } from './acolhimento-paciente.component';

describe('AcolhimentoPacienteComponent', () => {
  let component: AcolhimentoPacienteComponent;
  let fixture: ComponentFixture<AcolhimentoPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcolhimentoPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcolhimentoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
