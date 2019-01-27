import { Component, OnInit, Inject } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { Router } from '@angular/router'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-acolhimento-paciente',
  templateUrl: './acolhimento-paciente.component.html',
  styleUrls: ['./acolhimento-paciente.component.css']
})
export class AcolhimentoPacienteComponent implements OnInit {

  cadastrarNovo: boolean = false;

  constructor(
     private pacienteService: PacienteService,
     private router: Router,
     public dialog: MatDialog
     ) { }

  ngOnInit() {
  }

  procurar(ses: number) {
    this.pacienteService.procurarPaciente(ses).subscribe(
      pacientes => {
        if (pacientes.length) {
          this.cadastrarNovo = false;
          this.router.navigate([`paciente/${pacientes[0].id}`]);
        }
        else {
          this.cadastrarNovo = false;
          this.openDialog();
        }
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCadastrarNovoPaciente, {
      width: '250px',
      height: '250px',
      data: {cadastrarNovo: this.cadastrarNovo}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cadastrarNovo = result;
      if (this.cadastrarNovo) {
        this.router.navigate([`paciente`]);
      }
    });
  }
}

export interface DialogData {
  cadastrarNovo: boolean;
}

@Component({
  selector: 'dialog-cadastrar-novo-paciente',
  templateUrl: 'dialog-cadastrar-novo-paciente.html',
})
export class DialogCadastrarNovoPaciente {

  constructor(
    public dialogRef: MatDialogRef<DialogCadastrarNovoPaciente >,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.data.cadastrarNovo = true;
    }
  onNoClick(): void {
    this.data.cadastrarNovo = false;
    this.dialogRef.close();
  }

  onYesClick(): void {
  }
}