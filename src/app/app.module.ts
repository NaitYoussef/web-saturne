import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';

import {RouterModule, Routes} from '@angular/router';

import {APP_BASE_HREF} from '@angular/common';
import { SaturneComponent } from './saturne/saturne.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

export const routes : Routes = [
  {path: '', component:AccueilComponent },
  {path: 'accueil', component:AccueilComponent },
  {path: 'utilisateur', component:UtilisateurComponent },
  {path: 'accueil/saturne', component:SaturneComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    AccueilComponent,
    SaturneComponent,
    UtilisateurComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
