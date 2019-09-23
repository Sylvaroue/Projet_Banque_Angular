import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

user: Client;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserServiceService,
              private location: Location) {
    this.user = Client.createBlank();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userService.getUserById(parseInt(params.get('id_user'), 10)).subscribe(
        (response) => {
          this.user = response;
        });
    });
  }

  public updateUserClicked(): void {
    this.userService.updateClient(this.user).subscribe(
      (response) => {
        this.router.navigateByUrl('/comptes/' + this.user.idUser);
      }
    );
  }

  goBackButtonPressed(): void {
    this.location.back();
  }


}
