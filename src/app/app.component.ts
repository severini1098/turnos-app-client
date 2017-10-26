import { Component, OnInit } from '@angular/core';
import { PacienteService } from './app.component.service';
import { Paciente } from './app.paciente';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PacienteService]
})
export class AppComponent implements OnInit{
  title = 'app works!';
  arreglo = ['Persona 1', 'Persona 2'];

  pacientes = [];

  constructor(private pacienteService: PacienteService) {}
  ngOnInit() {
/*    this.pacienteService.getPacientes().subscribe((data: Paciente[]) =>
      this.pacientes = data);*/
    this.pacienteService.getPacientes().subscribe(data =>
      console.log(data));
  }

}
