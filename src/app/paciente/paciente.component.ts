import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../entity/paciente';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  formPaciente: FormGroup;

  paciente: Paciente = new Paciente(); 
  inclusao: boolean;

  constructor(
    private route : ActivatedRoute,
    private pacienteService: PacienteService,
    fb: FormBuilder) { 
      this.formPaciente = fb.group({
      })
    }

  ngOnInit() {
    debugger
    let id: any = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.inclusao = false;
      this.pacienteService.getPaciente(+id).subscribe(
        paciente => this.paciente = paciente
      )
    }
    else {
      this.inclusao = true;
      this.paciente = new Paciente();
    }
  }

  isAlteracao() {
    return !this.inclusao;
  }
  salvar() {
    if (this.inclusao) {
      this.pacienteService.addPaciente(this.paciente).subscribe(
        paciente => {
          alert(`Pacieente SES ${paciente.ses} adicionado. Novo número de passage ${paciente.numeroPassagem}`);
        }
      )
    } else {
      this.pacienteService.updatePaciente(this.paciente).subscribe (
        _ => {
          alert(`Paciente atualizado com sucesso`);
        }
      )
    }
  }

}
