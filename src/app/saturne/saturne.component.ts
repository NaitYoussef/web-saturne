import { Component, OnInit, Input } from '@angular/core';
import {SaturneService} from './saturne.service'
import { Saturne } from "app/models/saturne";
import { Utilisateur } from "app/models/utilisateur";
import { Participant } from "app/models/participant";

@Component({
  selector: 'app-saturne',
  templateUrl: './saturne.component.html',
  styleUrls: ['./saturne.component.css'],
  providers: [SaturneService]
})
export class SaturneComponent implements OnInit {

  @Input('utilisateurCourant') utilisateurCourant:Utilisateur;
  private saturnes:Saturne[];
  private saturne: Saturne = new Saturne();

  constructor(public saturneService:SaturneService) { }

  ngOnInit() {
    console.log(this.utilisateurCourant);
    this.recupererSaturnes(); 
  }

  creerSaturne() {
    this.saturne.admin = this.utilisateurCourant;
    this.saturneService.postSaturne(this.saturne).subscribe((saturne: Saturne) => {
      this.saturne = new Saturne();
      this.recupererSaturnes();
    });
  }

  inscrireSaturne(id: number) {
    let saturne:Saturne = new Saturne();
    let participant:Participant = new Participant();
    participant.id = this.utilisateurCourant.id;
    saturne.participants.push(participant);
    console.log(saturne);
    console.log(JSON.stringify(saturne));
    this.saturneService.inscrireSaturne(saturne, id).subscribe((saturne: Saturne) => {
      this.recupererSaturnes();
    });
  }

  demarrerSaturne(id: number) {
    console.log(this.utilisateurCourant.id);
    this.saturneService.demarrerSaturne(id, this.utilisateurCourant.id).subscribe((saturne: Saturne) => {
      this.recupererSaturnes();
    });
  }
  participerSaturne(id: number) {
    this.saturneService.participerSaturne(id, this.utilisateurCourant.id).subscribe((saturne: Saturne) => {
      this.recupererSaturnes();
    });
  }
  terminerSaturne(id: number) {
    this.saturneService.terminerSaturne(id, this.utilisateurCourant.id).subscribe((saturne: Saturne) => {
      this.recupererSaturnes();
    });
  }
  retirerSaturne(id: number) {
    this.saturneService.retirerSaturne(id, this.utilisateurCourant.id).subscribe((saturne: Saturne) => {
      this.recupererSaturnes();
    });
  }
  recupererSaturnes() {
    this.saturneService.getSaturnes().subscribe((saturnes: Saturne[]) => {
      console.log(saturnes);
      this.saturnes = saturnes;
    });
  }
}
