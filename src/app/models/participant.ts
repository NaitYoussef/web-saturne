import { Utilisateur } from "app/models/utilisateur";

export class Participant extends Utilisateur {
    ordre: number;
	occurence: number;
}