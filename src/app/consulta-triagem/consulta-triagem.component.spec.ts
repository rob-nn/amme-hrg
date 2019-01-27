import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaTriagemComponent } from './consulta-triagem.component';

describe('ConsultaTriagemComponent', () => {
  let component: ConsultaTriagemComponent;
  let fixture: ComponentFixture<ConsultaTriagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaTriagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaTriagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
