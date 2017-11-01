import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Saturne } from "app/models/saturne";

@Injectable()
export class SaturneService {

  constructor(private http: Http) {

  }

  getSaturnes(): Observable<Saturne[]> {
    return this.http.get('http://localhost:8080/saturnes')
      .map(response => response.json() as Saturne[]);
  }

  postSaturne(saturne: Saturne): Observable<Saturne> {
    return this.http.post('http://localhost:8080/saturnes', saturne)
      .map(response => response.json() as Saturne);
  }

  inscrireSaturne(saturne:Saturne, id:number):Observable<Saturne> {
    return this.http.put('http://localhost:8080/saturnes/' + id, saturne)
    .map(response => response.json() as Saturne);
  }

  demarrerSaturne(id:number, utilisateurId:number):Observable<Saturne> {
    return this.http.put('http://localhost:8080/saturnes/' + id + '/debut?utilisateurId=' + utilisateurId, {})
    .map(response => response.json() as Saturne);
  }

  terminerSaturne(id:number, utilisateurId:number):Observable<Saturne> {
    let params = new URLSearchParams();
    params.append('utilisateurId', utilisateurId.toString());
    return this.http.put('http://localhost:8080/saturnes/' + id + '/fin?utilisateurId=' + utilisateurId, {})
    .map(response => response.json() as Saturne);
  }

  participerSaturne(id:number, utilisateurId:number):Observable<Saturne> {
    let params = new URLSearchParams();
    params.append('utilisateurId', utilisateurId.toString());
    return this.http.put('http://localhost:8080/saturnes/' + id + '/participer?utilisateurId=' + utilisateurId, {})
    .map(response => response.json() as Saturne);
  }

  retirerSaturne(id:number, utilisateurId:number):Observable<Saturne> {
    let params = new URLSearchParams();
    params.append('utilisateurId', utilisateurId.toString());
    return this.http.put('http://localhost:8080/saturnes/' + id + '/retrait?utilisateurId=' + utilisateurId, {})
    .map(response => response.json() as Saturne);
  }
}