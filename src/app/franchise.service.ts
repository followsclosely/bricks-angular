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
      name: 'California', franchises:[
        {id: 1, name: 'Downtown Disney District', lastUpdate: new Date() },
        {id: 1, name: 'Fashion Valley', lastUpdate: new Date() },
        {id: 1, name: 'Glendale Galleria', lastUpdate: new Date() },
        {id: 1, name: 'Hillsdale Shopping Center', lastUpdate: new Date() },
        {id: 1, name: 'Ontario Mills', lastUpdate: new Date() },
        {id: 1, name: 'South Coast Plaza', lastUpdate: new Date() }
      ] 
    },
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