import { IVisit } from './../models/visit.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {

  visitToBook: IVisit;
}
