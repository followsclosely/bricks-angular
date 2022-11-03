import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import { FranchiseService, FranchiseByCountry } from '../franchise.service';

@Component({
  selector: 'app-franchise-locator',
  templateUrl: './franchise-locator.component.html',
  styleUrls: ['./franchise-locator.component.css']
})
export class FranchiseLocatorComponent implements OnInit {
  franchises : FranchiseByCountry[];

  stateControl = new FormControl('');
  franchiseControl = new FormControl('');

  constructor(franchiseService : FranchiseService) {
    this.franchises = franchiseService.getFranchises();
  }

  ngOnInit() {
  }

}