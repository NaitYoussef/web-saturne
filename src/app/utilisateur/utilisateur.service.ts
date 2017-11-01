import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Utilisateur } from "app/models/utilisateur";

@Injectable()
export class UtilisateurService {

    private utilisateurCourant: Utilisateur = new Utilisateur();

    constructor(private http: Http) {

    }

    getUtilisateurs(): Observable<Utilisateur[]> {
        return this.http.get('http://localhost:8080/utilisateurs')
            .map(response => response.json() as Utilisateur[]);
    }

    postUtilisateur(utilisateur:Utilisateur): Observable<Utilisateur> {
        return this.http.post('http://localhost:8080/utilisateurs', utilisateur)
            .map(response => response.json() as Utilisateur);
    }
}