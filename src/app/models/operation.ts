import { Compte } from './compte';

export class Operation {
	public idOperation: number;
	public montant: number;
	public type: string;
	public libelle: string;
	public compte: Compte;
	public dateOperation: Date;
	
	constructor(idOperation: number, mon: number, typ: string, lib: string, dat: Date, com: Compte) {
        this.idOperation = idOperation;
		this.montant = mon;
		this.type = typ;
		this.libelle = lib;
		this.compte = com;
		this.dateOperation = dat;
    }
    
    public static createBlank(): Operation {
        return new Operation(-1, 0, '', '', null, null);
    }
}