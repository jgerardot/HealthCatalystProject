import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import UserService from './shared/API/user.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/app-root', pathMatch: 'full' },
  {
    path: 'app-root',
    component: AppComponent
  },
  {
    path: 'users-list',
    component: AppComponent
  }
  //{
  //  path: 'users-add',
  //  component: SugarLevelEditComponent
  //},
  //{
  //  path: 'users-edit/:id',
  //  component: SugarLevelEditComponent
  //}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
