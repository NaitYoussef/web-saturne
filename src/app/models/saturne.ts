import { Utilisateur } from "app/models/utilisateur";
import { Tour } from "app/models/tour";
import { Participant } from "app/models/participant";

export class Saturne {
    id: number;
    admin: Utilisateur;
    mensualite: number;
    active: boolean;
    toursHistoriques: Tour[];
    tourActif: Tour;
    participants:Participant[];

    constructor () {
        this.toursHistoriques = [];
        this.participants = [];
    }
}