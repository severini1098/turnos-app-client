import {Http, Response} from '@angular/http'
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {Paciente} from "./app.paciente";

@Injectable()
export class PacienteService {

  private url = 'http://localhost:8080/pacientes';

  constructor(private http: Http) {
  }

  getPacientes(): Observable<any[]> {

    return this.http.get(this.url)
      .map((response: Response) => {
        return <Paciente[]> response.json()._embedded.pacientes;
      });

  }
}
