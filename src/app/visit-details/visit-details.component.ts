import { ISession } from './../models/visit.model';
import { Component, Input } from '@angular/core';
import { IVisit } from "../models/visit.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-visit-details',
  templateUrl: './visit-details.component.html',
  styleUrls: ['./visit-details.component.css']
})
export class VisitDetailsComponent {

  @Input()
  visit!: IVisit;
  constructor(private router: Router) {}

  navigateToBooking(id: number): void {
    this.router.navigate(['/visits/' + id])
  }

}
