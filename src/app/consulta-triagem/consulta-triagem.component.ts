import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from '../entity/paciente';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-consulta-triagem',
  templateUrl: './consulta-triagem.component.html',
  styleUrls: ['./consulta-triagem.component.css']
})
export class ConsultaTriagemComponent implements OnInit {

  private paciente: Paciente;

  constructor(
    private route: ActivatedRoute,
    private pacienteService: PacienteService
  ) { }

  ngOnInit() {
    let pacienteId: any = this.route.snapshot.paramMap.get('pacienteId');
    this.pacienteService.getPaciente(+pacienteId).subscribe(
    paciente => { 
      this.paciente = paciente
    });
  }

  salvar () {
    alert("Mostrar extrado para impressão com resultado da triagem")
  }

}
