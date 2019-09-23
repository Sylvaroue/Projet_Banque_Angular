import { Compte } from './compte';

export class Seuil {
	public idSeuil: number;
	public nomSeuil: string;
	public valeur: number;
	public compte: Compte;
	
	constructor(idSeuil: number, nom: string, val: number, com: Compte) {
        this.idSeuil = idSeuil;
		this.nomSeuil = nom;
		this.valeur = val;
		this.compte = com;
    }
    
    public static createBlank(): Seuil {
        return new Seuil(-1, '', 0, null);
    }
}