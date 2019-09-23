import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { Client } from 'src/app/models/client';
import { Compte } from 'src/app/models/compte';

@Component({
  selector: 'app-comptes-user',
  templateUrl: './comptes-user.component.html',
  styleUrls: ['./comptes-user.component.css']
})
export class ComptesUserComponent implements OnInit {

  user: Client;
  comptes: Compte[];

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserServiceService) {

    this.user = Client.createBlank();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getUserById(parseInt(params.get('id_user'), 10));
    });
  }

  public getComptes(client: Client): void {
    this.userService.getComptesUser(client).subscribe(
      (response) => {
        this.comptes = response;
      });
  }

  public getUserById(id: number): void {
    this.userService.getUserById(id).subscribe(
      (response) => {
        this.user = response;
        console.log(this.user);
        this.getComptes(this.user);
      });
  }

  public selectButtonPressed(id: number): void {
    this.router.navigateByUrl('/gestion-compte/' + id);
  }

  public createButtonPressed(): void {
    this.router.navigateByUrl('/add-compte/' + this.user.idUser);
  }

  public editUser(): void {
    this.router.navigateByUrl('/edit-user/' + this.user.idUser);
  }

  public deconnexion(): void {
    this.router.navigateByUrl('/login');
  }

}
