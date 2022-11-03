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
          {id: 2, name: 'LEGO® Store Cf Rideau Centre', lastUpdate: new Date() },
          {id: 3, name: 'LEGO® Store Chinook Center', lastUpdate: new Date() },
          {id: 4, name: 'LEGO® Store Fairview Mall', lastUpdate: new Date() },
          {id: 5, name: 'LEGO® Store Fairview Pointe Claire', lastUpdate: new Date() },
          {id: 6, name: 'LEGO® Store Guilford Town Centre', lastUpdate: new Date() }
      ]
    },
    {
      name: 'Mexico',
      groups: null,
      franchises: [
          {id: 7, name: 'LEGO® Store Altacia', lastUpdate: new Date() },
          {id: 8, name: 'LEGO® Store Altaria', lastUpdate: new Date() },
          {id: 9, name: 'LEGO® Store Averanda', lastUpdate: new Date() },
          {id: 10, name: 'LEGO® Store Galerias Guadalajara', lastUpdate: new Date() },
          {id: 11, name: 'LEGO® Store Galerias Pachuca', lastUpdate: new Date() },
          {id: 12, name: 'LEGO® Store Galerias Queretaro', lastUpdate: new Date() },
          {id: 13, name: 'LEGO® Store Galerías Monterrey', lastUpdate: new Date() },
          {id: 14, name: 'LEGO® Store Galerías Saltillo', lastUpdate: new Date() },
          {id: 15, name: 'LEGO® Store La Isla Cancun', lastUpdate: new Date() }
      ]
    },
    {
      name: 'United States',
      franchises: null,
      groups: [
        {
          name: 'California', 
          franchises:[
            {id: 16, name: 'LEGO® Store Downtown Disney District', lastUpdate: new Date() },
            {id: 17, name: 'LEGO® Store Fashion Valley', lastUpdate: new Date() },
            {id: 18, name: 'LEGO® Store Glendale Galleria', lastUpdate: new Date() },
            {id: 19, name: 'LEGO® Store Hillsdale Shopping Center', lastUpdate: new Date() },
            {id: 20, name: 'LEGO® Store Ontario Mills', lastUpdate: new Date() },
            {id: 21, name: 'LEGO® Store South Coast Plaza', lastUpdate: new Date() }
          ] 
        },
        {
          name: 'Virginia', 
          franchises:[
            {id: 22, name: 'LEGO® Store Fashion Centre At Pentagon City', lastUpdate: new Date() },
            {id: 23, name: 'LEGO® Store Tysons Corner', lastUpdate: new Date() },
            {id: 24, name: 'LEGO® Store Woodbridge', lastUpdate: new Date() }
          ] 
        }
      ]
    }
  ];

  constructor() { }

  public getFranchises() : FranchiseByCountry[] {
    return this.franchises;
  }

  public getFranchise(id : number) : Franchise {

    //Loop thought all the franchises if there are any.
    for (var j = 0, jlen = this.franchises.length; j < jlen; j++) {
      var country = this.franchises[j];

      if( country.franchises ){
        for (var i = 0, ilen = country.franchises.length; i < ilen; i++){
          var franchise = country.franchises[i];
          if( franchise.id == id) {
            return franchise;
          }
        }
      }

      if( country.groups ){
        for (var i = 0, ilen = country.groups.length; i < ilen; i++){
          var group = country.groups[i];
          for (var k = 0, klen = group.franchises.length; k < klen; k++){
            var franchise = group.franchises[k];
            if( franchise.id == id) {
              return franchise;
            }
          }
        }
      }
    }

    return {id: null, name: null, lastUpdate: null };
  }
}