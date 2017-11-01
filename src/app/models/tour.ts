import { Utilisateur } from "app/models/utilisateur";
import { Participation } from "app/models/participation";

export class Tour {
    ordre: number;
    participations: Participation[];
    beneficiaire: Utilisateur;
    dateRetrait: Date;
    actif: boolean;

    constructor () {
        this.participations = [];
    }
}