import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ComptesUserComponent } from './components/comptes-user/comptes-user.component';
import { AddCompteComponent } from './components/add-compte/add-compte.component';
import { GestionCompteComponent } from './components/gestion-compte/gestion-compte.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { OperationsCompteComponent } from './components/operations-compte/operations-compte.component';
import { SeuilsCompteComponent } from './components/seuils-compte/seuils-compte.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ComptesUserComponent,
    AddCompteComponent,
    GestionCompteComponent,
    EditUserComponent,
    OperationsCompteComponent,
    SeuilsCompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'comptes/:id_user',
        component: ComptesUserComponent
      },
      {
        path: 'edit-user/:id_user',
        component: EditUserComponent
      },
      {
        path: 'add-compte/:id_user',
        component: AddCompteComponent
      },
      {
        path: 'gestion-compte/:id_compte',
        component: GestionCompteComponent
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
