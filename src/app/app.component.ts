import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import { FranchiseService, FranchiseGroup, FranchiseByCountry } from './franchise.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  franchises : FranchiseByCountry[];

  stateControl = new FormControl('');
  franchiseControl = new FormControl('');

  constructor(franchiseService : FranchiseService) {
    this.franchises = franchiseService.getFranchises();
  }

}
