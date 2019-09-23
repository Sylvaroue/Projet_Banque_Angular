import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  infoUser: Client;

  @Input()
  connecUser: Client;

  constructor(private router: Router, private userService: UserServiceService) {
    this.infoUser = Client.createBlank();
    this.connecUser = Client.createBlank();
  }

  ngOnInit() {
  }

  public getConnection(): void {
    if (!this.infoUser.username || !this.infoUser.password) {
      console.log('Entrez un username et un mot de passe je vous prie');
    } else {
      this.userService.getUserByUsername(this.infoUser.username).subscribe(
        (response) => {
          this.connecUser = response;
          console.log(this.connecUser.nomUser);
          if (this.connecUser.password === this.infoUser.password) {
            this.router.navigateByUrl('/comptes/' + this.connecUser.idUser);
            console.log('Connexion réussie');
          } else {
            this.router.navigateByUrl('/login');
            console.log('Vérifiez votre saisie');
      }
       });
    }
  }

}
