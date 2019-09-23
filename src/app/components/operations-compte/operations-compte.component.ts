import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CompteServiceService } from 'src/app/services/compte-service.service';
import { Compte } from 'src/app/models/compte';
import { Operation } from 'src/app/models/operation';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { OperationServiceService } from 'src/app/services/operation-service.service';

@Component({
  selector: 'app-operations-compte',
  templateUrl: './operations-compte.component.html',
  styleUrls: ['./operations-compte.component.css']
})
export class OperationsCompteComponent implements OnChanges {

  @Input()
  compte: Compte;

  operations: Operation[];
  opInProgress: Operation;
  multiChecked: boolean;
  nbMois: number;

  constructor(private router: Router, private route: ActivatedRoute, private compteService: CompteServiceService,
              private operationService: OperationServiceService) {

                this.opInProgress = Operation.createBlank();
                this.multiChecked = false;
              }

  ngOnChanges() {
/*    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getCompteById(parseInt(params.get('id_compte'), 10));
    });*/
    this.getOperations();
  }

  public getOperations(): void {
    this.compteService.getOperationsCompte(this.compte).subscribe(
      (response) => {
        this.operations = response;
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
  public deleteOperation(operation: Operation): void {
    this.operationService.deleteOperation(operation, operation.idOperation).subscribe(
      (response) => {
        this.opInProgress = response;
        console.log(this.opInProgress);
        window.location.reload();
      });
  }

  public addOperation(): void {
    this.opInProgress.compte = this.compte;
    console.log(this.multiChecked);
    if (this.opInProgress.type === "dépense" || this.opInProgress.type === "recette") {
      if (this.multiChecked === false) {
        this.operationService.createOperation(this.opInProgress).subscribe(
          (response) => {
            this.opInProgress = response;
            console.log(this.opInProgress);
            this.opInProgress = Operation.createBlank();
          });
      }
      if (this.multiChecked === true) {
        this.operationService.createOperationRepeat(this.opInProgress, this.nbMois).subscribe(
          (response) => {
            this.opInProgress = response;
            console.log(this.opInProgress);
            this.opInProgress = Operation.createBlank();
          });
      }
      window.location.reload();
  } else {
    alert('Le type saisi doit être "dépense" ou "recette"');
  }
  }

}
