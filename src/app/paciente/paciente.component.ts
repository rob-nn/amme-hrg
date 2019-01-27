import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../entity/paciente';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


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
    private fb: FormBuilder,
    private router: Router) { 
      this.pacienteFormGroup = this.fb.group({
        id: [''],
        ses: ['', [Validators.required, Validators.max(999999999999)]],
        nome: ['', [Validators.required, Validators.maxLength(255)]],
        sexo: ['', [Validators.required]],
        dataNascimento: ['', [Validators.required]],
        estadoCivil: ['', [Validators.required]],
        nacionalidade: ['', [Validators.required]],
        endereco: ['', [Validators.required, Validators.maxLength(500)]],
        telefoneCelularPessoal: ['', [Validators.required, Validators.maxLength(13)]],
        telefoneCelularContato: ['', [Validators.required, Validators.maxLength(13)]],
        telefoneFixo: ['', [Validators.maxLength(13)]],
        profissao: ['', [Validators.required, Validators.maxLength(255)]],
        nomePai: ['', [Validators.maxLength(255)]],
        nomeMae: ['', [Validators.maxLength(255)]],
        orfao: [''],
        timestamp: ['']
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
          this.pacienteFormGroup.get('ses').disable();
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
          alert(`Pacieente SES ${paciente.ses} adicionado.`);
        }
      )
    } else {
      this.pacienteService.updatePaciente(this.paciente).subscribe (
        _ => {
          alert(`Paciente atualizado com sucesso`);
          this.router.navigate([`triagem/${this.paciente.id}`]);
        }
      )
    }
  }
}
