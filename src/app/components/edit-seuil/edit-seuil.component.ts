import { Component, OnInit } from '@angular/core';
import { Seuil } from 'src/app/models/seuil';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SeuilServiceService } from '../../services/seuil-service.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-edit-seuil',
  templateUrl: './edit-seuil.component.html',
  styleUrls: ['./edit-seuil.component.css']
})
export class EditSeuilComponent implements OnInit {

  seuil: Seuil;


  constructor(private router: Router, private route: ActivatedRoute, private seuilService: SeuilServiceService,
              private location: Location) { this.seuil = Seuil.createBlank();
     }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.seuilService.getSeuilById(parseInt(params.get('id_seuil'), 10)).subscribe(
        (response) => {
          this.seuil = response;
        });
    });
  }

  public updateSeuilClicked(): void {
    this.seuilService.updateSeuil(this.seuil, this.seuil.idSeuil).subscribe(
      (response) => {
        this.router.navigateByUrl('/gestion-compte/' + this.seuil.compte.idCompte);
      }
    );
  }

  goBackButtonPressed(): void {
    this.location.back();
  }
  }


