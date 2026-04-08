/*
  Author: Yansong Li
  Student ID: 24832384
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ItemManageComponent } from './components/item-manage/item-manage.component';
import { SearchComponent } from './components/search/search.component';
import { PrivacySecurityComponent } from './components/privacy-security/privacy-security.component';
import { HelpComponent } from './components/help/help.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'manage', component: ItemManageComponent },
  { path: 'search', component: SearchComponent },
  { path: 'privacy', component: PrivacySecurityComponent },
  { path: 'help', component: HelpComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemManageComponent,
    SearchComponent,
    PrivacySecurityComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }