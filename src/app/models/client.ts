export class Client {
    public idUser: number;
    public nomUser: string;
	public prenomUser: string;
	public username: string;
	public password: string;
// 	public roles: Role[];
	
constructor(id: number, nomUser: string, p: string, u: string, pas: string/*, rol: Role[]*/) {
    this.idUser = id;
    this.nomUser = nomUser;
	this.prenomUser = p;
	this.username = u;
	this.password = pas;
// 	this.roles = rol;
}

public static createBlank(): Client {
        return new Client(-1, '', '', '', '');
    }

}
