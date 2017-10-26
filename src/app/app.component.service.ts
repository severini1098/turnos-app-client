import {Headers, Http, Response} from '@angular/http'
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Paciente} from "./app.paciente";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class PacienteService {

  static headerA = {
    'Content-Type': 'application/hal+json',
    'Access-Control-Allow-Origin': '*'
  };

  static headerObject = {
    headers: new Headers(PacienteService.headerA)
  };

  constructor(private http: Http) {
  }

  getPacientes(): Observable<string> {

    return this.http.get('http://localhost:8080/pacientes', PacienteService.headerObject)
      .map((response: Response) => response.json())
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Service error');
  }

}
