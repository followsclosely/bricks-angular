import { Injectable } from '@angular/core';

export interface Franchise {
  id: number;
  name: string;
  lastUpdate: Date
}

export interface FranchiseGroup {
  name: string;
  franchises: Franchise[];
}

export interface FranchiseByCountry {
  name: string;
  groups: FranchiseGroup[];
  franchises: Franchise[];
}


@Injectable()
export class FranchiseService {

  franchises: FranchiseByCountry[] = [
    {
      name: 'Canada',
      groups: null,
      franchises: [
          {id: 1, name: 'LEGO® Store Carrefour Laval', lastUpdate: new Date() },
          {id: 1, name: 'LEGO® Store Cf Rideau Centre', lastUpdate: new Date() },
          {id: 1, name: 'LEGO® Store Chinook Center', lastUpdate: new Date() },
          {id: 1, name: 'LEGO® Store Fairview Mall', lastUpdate: new Date() },
          {id: 1, name: 'LEGO® Store Fairview Pointe Claire', lastUpdate: new Date() },
          {id: 1, name: 'LEGO® Store Guilford Town Centre', lastUpdate: new Date() }
      ]
    },
    {
      name: 'Mexico',
      groups: null,
      franchises: [
          {id: 1, name: 'LEGO® Store Altacia', lastUpdate: new Date() },
          {id: 1, name: 'LEGO® Store Altaria', lastUpdate: new Date() },
          {id: 1, name: 'LEGO® Store Averanda', lastUpdate: new Date() },
          {id: 1, name: 'LEGO® Store Galerias Guadalajara', lastUpdate: new Date() },
          {id: 1, name: 'LEGO® Store Galerias Pachuca', lastUpdate: new Date() },
          {id: 1, name: 'LEGO® Store Galerias Queretaro', lastUpdate: new Date() },
          {id: 1, name: 'LEGO® Store Galerías Monterrey', lastUpdate: new Date() },
          {id: 1, name: 'LEGO® Store Galerías Saltillo', lastUpdate: new Date() },
          {id: 1, name: 'LEGO® Store La Isla Cancun', lastUpdate: new Date() }
      ]
    },
    {
      name: 'United States',
      franchises: null,
      groups: [
        {
          name: 'California', 
          franchises:[
            {id: 1, name: 'LEGO® Store Downtown Disney District', lastUpdate: new Date() },
            {id: 1, name: 'LEGO® Store Fashion Valley', lastUpdate: new Date() },
            {id: 1, name: 'LEGO® Store Glendale Galleria', lastUpdate: new Date() },
            {id: 1, name: 'LEGO® Store Hillsdale Shopping Center', lastUpdate: new Date() },
            {id: 1, name: 'LEGO® Store Ontario Mills', lastUpdate: new Date() },
            {id: 1, name: 'LEGO® Store South Coast Plaza', lastUpdate: new Date() }
          ] 
        },
        {
          name: 'Virginia', 
          franchises:[
            {id: 1, name: 'LEGO® Store Fashion Centre At Pentagon City', lastUpdate: new Date() },
            {id: 1, name: 'LEGO® Store Tysons Corner', lastUpdate: new Date() },
            {id: 1, name: 'LEGO® Store Woodbridge', lastUpdate: new Date() }
          ] 
        }
      ]
    }
  ];

  constructor() { }

  getFranchises(): FranchiseByCountry[] {
    return this.franchises;
  }
}