import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Franchise, FranchiseService } from '../franchise.service';

@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.css']
})
export class FranchiseComponent implements OnInit {
  franchise : Franchise;

  constructor(
    private franchiseService : FranchiseService,
    private route: ActivatedRoute) {
   }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const id = routeParams.get('id');
    this.franchise= this.franchiseService.getFranchise(Number(id));
  }

}