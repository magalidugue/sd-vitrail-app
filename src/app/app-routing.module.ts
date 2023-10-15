import { UserRegisterComponent } from './user-register/user-register.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VisitsListComponent} from "./visits-list/visits-list.component";

const routes: Routes = [
  {path: 'visits', component: VisitsListComponent},
  {path: 'visits/:id', component: BookingFormComponent},
  {path: '', redirectTo: '/visits', pathMatch: 'full'},
  {path: 'register', component: UserRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
