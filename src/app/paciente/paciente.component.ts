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

  pacienteFormGroup: FormGroup;

  paciente: Paciente = new Paciente(); 
  inclusao: boolean;

  constructor(
    private route : ActivatedRoute,
    private pacienteService: PacienteService,
    private fb: FormBuilder) { 
      this.pacienteFormGroup = this.fb.group({
        id: [''],
        ses: [''],
        nome: [''],
        sexo: [''],
        dataNascimento: [''],
        estadoCivil: [''],
        nacionalidade: [''],
        endereco: [''],
        telefoneCelularPessoal: [''],
        telefoneCelularContato: [''],
        telefoneFixo: [''],
        profissao: [''],
        nomePai: [''],
        nomeMae: [''],
        orfao: [''],
        timestamp: [''],
        numeroPassagem: [''],
      })
    }

  ngOnInit() {
    let id: any = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.inclusao = false;
      this.pacienteService.getPaciente(+id).subscribe(
        paciente => { 
          this.paciente = paciente
          this.pacienteFormGroup.setValue(paciente);
        }
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
