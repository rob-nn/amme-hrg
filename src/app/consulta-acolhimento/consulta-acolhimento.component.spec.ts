import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAcolhimentoComponent } from './consulta-acolhimento.component';

describe('ConsultaAcolhimentoComponent', () => {
  let component: ConsultaAcolhimentoComponent;
  let fixture: ComponentFixture<ConsultaAcolhimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaAcolhimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaAcolhimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
