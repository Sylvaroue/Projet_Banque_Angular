import { Client } from './client';
import { Operation } from './operation';
import { Seuil } from './seuil';

export class Compte {
	public idCompte: number;
    public solde: number;
    public intitule: string;
    public client: Client;
    public operations: Operation[];
    public seuil: Seuil[];
    
    constructor(id: number, s: number, i: string, cli: Client) {
        this.idCompte = id;
        this.solde = s;
        this.intitule = i;
        this.client = cli;
    }

    public static createBlank(): Compte {
        return new Compte(-1, 0, '', null);
    }
}
