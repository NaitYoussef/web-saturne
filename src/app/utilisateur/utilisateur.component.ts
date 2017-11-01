import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from "app/utilisateur/utilisateur.service";
import { Utilisateur } from "app/models/utilisateur";

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css'],
  providers: [UtilisateurService]
})
export class UtilisateurComponent implements OnInit {

  private utilisateurs: Utilisateur[];
  private utilisateurCourant: Utilisateur = new Utilisateur();
  private utilisateur: Utilisateur = new Utilisateur();

  constructor(public utilisateurService: UtilisateurService) { }

  ngOnInit() {
    this.recuprerUtilisateurs();
  }

  creerUtilisateur() {
    console.log(this.utilisateur);
    this.utilisateurService.postUtilisateur(this.utilisateur).subscribe((utilisateur: Utilisateur) => {
      this.utilisateur = new Utilisateur();
      this.recuprerUtilisateurs();
    });
  }

  recuprerUtilisateurs() {
    this.utilisateurService.getUtilisateurs().subscribe((utilisateurs: Utilisateur[]) => {
      this.utilisateurs = utilisateurs;
      this.utilisateurCourant = utilisateurs[0];
    });
  }
}
