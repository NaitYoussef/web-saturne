import { Component, OnInit, Inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import {Response} from '@angular/http';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import { Utilisateur } from "app/models/utilisateur";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  private utilisateurCourant:Utilisateur = new Utilisateur();

  constructor(private _route: ActivatedRoute) {
    const s:ActivatedRouteSnapshot = this._route.snapshot;
    this.utilisateurCourant = s.params as Utilisateur;
  }

  ngOnInit() {
  }

}
