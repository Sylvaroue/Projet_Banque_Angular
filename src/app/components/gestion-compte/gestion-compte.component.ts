import { Component, OnInit } from '@angular/core';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { CompteServiceService } from '../../services/compte-service.service';
import { Compte } from 'src/app/models/compte';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gestion-compte',
  templateUrl: './gestion-compte.component.html',
  styleUrls: ['./gestion-compte.component.css']
})
export class GestionCompteComponent implements OnInit {

  compte: Compte;
  prevMonth: number;
  prevYear: number;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, 
              private compteService: CompteServiceService) {
    this.compte = Compte.createBlank();
    this.prevMonth = 0;
    this.prevYear = 0;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getCompteById(parseInt(params.get('id_compte'), 10));
    });
  }

  public getCompteById(id: number): void {
    this.compteService.getCompteById(id).subscribe(
      (response) => {
        this.compte = response;
        this.getPrevisions();
      });
  }

  public deleteAccount(): void {
    if (confirm('Etes-vous sûr de vouloir supprimer ce compte ? Les données ne pourront pas être récupérées.')) {
    this.compteService.deleteCompte(this.compte).subscribe(
      (response) => {
        this.compte = response;
        console.log(this.compte);
      });
    this.router.navigateByUrl('/comptes/' + this.compte.client.idUser);
    }
  }

  public soldeMaj(): void {
    if (confirm("Les opérations antérieures à la date d'aujourd'hui vont être appliquées au solde. Continuer ?")) {
    this.compteService.soldeMAJ(this.compte).subscribe(
      (response) => {
        this.compte = response;
        window.location.reload();
      });
    }
  }

  public getPrevisions(): void {
    this.compteService.previsionMois(this.compte).subscribe(
      (response) => {
        this.prevMonth = response ;
        this.compteService.previsionAnnee(this.compte).subscribe(
          (answer) => {
            this.prevYear = answer;
          });
      });
  }

  public deconnexion(): void {
    this.router.navigateByUrl('/login');
  }

}
