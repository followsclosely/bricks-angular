import { Component, VERSION } from '@angular/core';
import {FormControl} from '@angular/forms';

import { FranchiseService, FranchiseGroup } from './franchise.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  franchises : FranchiseGroup[];

  stateControl = new FormControl('');
  franchiseControl = new FormControl('');

  constructor(franchiseService : FranchiseService) {
    this.franchises = franchiseService.getFranchises();
  }
}
