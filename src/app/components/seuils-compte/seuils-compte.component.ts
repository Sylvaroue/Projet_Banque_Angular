import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SeuilServiceService } from 'src/app/services/seuil-service.service';
import { Compte } from 'src/app/models/compte';
import { Seuil } from 'src/app/models/seuil';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CompteServiceService } from '../../services/compte-service.service';


@Component({
  selector: 'app-seuils-compte',
  templateUrl: './seuils-compte.component.html',
  styleUrls: ['./seuils-compte.component.css']
})
export class SeuilsCompteComponent implements OnChanges {


  @Input()
  compte: Compte;

  seuils: Seuil[];
  seInProgress: Seuil;


  constructor(private router: Router, private route: ActivatedRoute, private seuilService: SeuilServiceService,
              private compteService: CompteServiceService) {

                this.seInProgress = Seuil.createBlank();

              }

  ngOnChanges() {
/*    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getCompteById(parseInt(params.get('id_compte'), 10));
    });*/
    this.getSeuils();
  }

  public getSeuils(): void {
    this.compteService.getSeuilsCompte(this.compte).subscribe(
      (response) => {
        this.seuils = response;
      });
  }



/*  public getCompteById(id: number): void {
    this.compteService.getCompteById(id).subscribe(
      (response) => {
        this.compte = response;
        console.log(this.compte);
        this.getOperations();
      });
  }
*/
  public deleteSeuil(seuil: Seuil): void {
    this.seuilService.deleteSeuil(seuil, seuil.idSeuil).subscribe(
      (response) => {
        this.seInProgress = response;
        console.log(this.seInProgress);
        window.location.reload();
      });
  }



  public addSeuil(): void {
    this.seInProgress.compte = this.compte;
    this.seuilService.createSeuil(this.seInProgress).subscribe(
        (response) => {
          this.seInProgress = response;
          console.log(this.seInProgress);
          this.seInProgress = Seuil.createBlank();
          window.location.reload();
        });
  }

  public editSeuil(seuil: Seuil): void {
    this.router.navigateByUrl('/edit-seuil/' + seuil.idSeuil);
  }

      }
