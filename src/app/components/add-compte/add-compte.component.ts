import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/models/compte';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CompteServiceService } from '../../services/compte-service.service';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-add-compte',
  templateUrl: './add-compte.component.html',
  styleUrls: ['./add-compte.component.css']
})
export class AddCompteComponent implements OnInit {

  newCompte: Compte;

  constructor(private router: Router, private route: ActivatedRoute, private compteService: CompteServiceService,
              private userService: UserServiceService) {

    this.newCompte = Compte.createBlank();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getUserById(parseInt(params.get('id_user'), 10));
    });
  }

  public getUserById(id: number): void {
    this.userService.getUserById(id).subscribe(
      (response) => {
        this.newCompte.client = response;
      });
  }

  public addCompteClicked(): void {
    this.compteService.createCompte(this.newCompte).subscribe(
      (response) => {
        this.newCompte = response;
        console.log(this.newCompte);
      });
    this.router.navigateByUrl('/comptes/' + this.newCompte.client.idUser);
  }

}
