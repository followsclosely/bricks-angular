import { Injectable } from '@angular/core';

export interface Franchise {
  id: number;
  name: string;
  lastUpdate: Date
}

export interface FranchiseGroup {
  disabled?: boolean;
  name: string;
  franchises: Franchise[];
}

@Injectable()
export class FranchiseService {

  franchises: FranchiseGroup[] = [
    {
      name: 'Virginia', franchises:[
        {id: 1, name: 'Tysons Corner', lastUpdate: new Date() },
        {id: 1, name: 'Woodbridge', lastUpdate: new Date() }
      ] 
    }];


  constructor() { }

  getFranchises(): FranchiseGroup[] {
    return this.franchises;
  }
}