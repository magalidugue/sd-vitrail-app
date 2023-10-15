import { Component } from '@angular/core';
import {IVisit} from "../models/visit.model";
import {VISITS} from "../models/visits.mock";

@Component({
  selector: 'app-visits-list',
  templateUrl: './visits-list.component.html',
  styleUrls: ['./visits-list.component.css']
})
export class VisitsListComponent {

  visits: IVisit[] = VISITS;

  selectedVisit: IVisit;
  isVisitSelected = false;

  onSelectVisit(visit: IVisit): void {
    this.isVisitSelected = true;
    this.selectedVisit = visit;
  }
}
