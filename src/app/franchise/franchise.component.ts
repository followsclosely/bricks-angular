import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Franchise, FranchiseService } from '../franchise.service';

export interface LegoColor {
  id : string;
  name: string;
  rgb : string;
}

export interface LegoPiece {
  id : string;
  lastUpdate: Date;
  element: LegoElement;
  color : LegoColor;
}

export interface LegoCategory {
  id : string;
  name: string;
}

export interface LegoElement {
  id : string;
  name : string;
  category : LegoCategory;
}

@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.css']
})
export class FranchiseComponent implements OnInit {
  franchise : Franchise;
  wall : LegoPiece[];
  layout : string = "grid";
  size : string;

  displayedColumns : string[] = ['image', 'id', 'color', 'element.name', 'lastUpdate'];

  constructor(
    private franchiseService : FranchiseService,
    private route: ActivatedRoute) {

      this.wall = [ {
        lastUpdate: new Date(),
        "id" : "6399909",
        "element" : {
          "id" : "1126",
          "name" : "Tile, Round 1 x 2 Oval",
          "category" : {
            "id" : "117",
            "name" : "Tile, Round"
          }
        },
        "color" : {
          "id" : "150",
          "name" : "Medium Nougat",
          "rgb" : "E3A05B"
        }
      }, {
        lastUpdate: new Date(),
        "id" : "6397819",
        "element" : {
          "id" : "1126",
          "name" : "Tile, Round 1 x 2 Oval",
          "category" : {
            "id" : "117",
            "name" : "Tile, Round"
          }
        },
        "color" : {
          "id" : "2",
          "name" : "Tan",
          "rgb" : "EED9A4"
        }
      }, {
        lastUpdate: new Date(),
        "id" : "6408440",
        "element" : {
          "id" : "1126pb001",
          "name" : "Tile, Round 1 x 2 Oval with Orange, Red, and Silver Lights Pattern",
          "category" : {
            "id" : "812",
            "name" : "Tile, Round, Decorated"
          }
        },
        "color" : {
          "id" : "86",
          "name" : "Light Bluish Gray",
          "rgb" : "AFB5C7"
        }
      }, {
        lastUpdate: new Date(),
        "id" : "6408629",
        "element" : {
          "id" : "1748",
          "name" : "Tile, Round 1 x 2 Half",
          "category" : {
            "id" : "117",
            "name" : "Tile, Round"
          }
        },
        "color" : {
          "id" : "86",
          "name" : "Light Bluish Gray",
          "rgb" : "AFB5C7"
        }
      }, {
        lastUpdate: new Date(),
        "id" : "6408047",
        "element" : {
          "id" : "1748",
          "name" : "Tile, Round 1 x 2 Half",
          "category" : {
            "id" : "117",
            "name" : "Tile, Round"
          }
        },
        "color" : {
          "id" : "2",
          "name" : "Tan",
          "rgb" : "EED9A4"
        }
      }, {
        lastUpdate: new Date(),
        "id" : "6400114",
        "element" : {
          "id" : "1748",
          "name" : "Tile, Round 1 x 2 Half",
          "category" : {
            "id" : "117",
            "name" : "Tile, Round"
          }
        },
        "color" : {
          "id" : "1",
          "name" : "White",
          "rgb" : "FFFFFF"
        }
      }, {
        lastUpdate: new Date(),
        "id" : "237626",
        "element" : {
          "id" : "74698",
          "name" : "Tile, Round 2 x 2 with Lifting Ring Thick and Bottom Stud Holder",
          "category" : {
            "id" : "117",
            "name" : "Tile, Round"
          }
        },
        "color" : {
          "id" : "11",
          "name" : "Black",
          "rgb" : "212121"
        }
      }, {
        lastUpdate: new Date(),
        "id" : "4222123",
        "element" : {
          "id" : "2376",
          "name" : "Tile, Round 2 x 2 with Lifting Ring Thin",
          "category" : {
            "id" : "117",
            "name" : "Tile, Round"
          }
        },
        "color" : {
          "id" : "5",
          "name" : "Red",
          "rgb" : "B30006"
        }
      }, {
        lastUpdate: new Date(),
        "id" : "4226010",
        "element" : {
          "id" : "2376",
          "name" : "Tile, Round 2 x 2 with Lifting Ring Thin",
          "category" : {
            "id" : "117",
            "name" : "Tile, Round"
          }
        },
        "color" : {
          "id" : "1",
          "name" : "White",
          "rgb" : "FFFFFF"
        }
      }, {
        lastUpdate: new Date(),
        "id" : "4124345",
        "element" : {
          "id" : "4150",
          "name" : "Tile, Round 2 x 2",
          "category" : {
            "id" : "117",
            "name" : "Tile, Round"
          }
        },
        "color" : {
          "id" : "41",
          "name" : "Aqua",
          "rgb" : "BCE5DC"
        }
      }, {
        lastUpdate: new Date(),
        "id" : "415026",
        "element" : {
          "id" : "4150",
          "name" : "Tile, Round 2 x 2",
          "category" : {
            "id" : "117",
            "name" : "Tile, Round"
          }
        },
        "color" : {
          "id" : "11",
          "name" : "Black",
          "rgb" : "212121"
        }
      }, {
        lastUpdate: new Date(),
        "id" : "415023",
        "element" : {
          "id" : "4150",
          "name" : "Tile, Round 2 x 2",
          "category" : {
            "id" : "117",
            "name" : "Tile, Round"
          }
        },
        "color" : {
          "id" : "7",
          "name" : "Blue",
          "rgb" : "0057A6"
        }
      }, {
        lastUpdate: new Date(),
        "id" : "4239001",
        "element" : {
          "id" : "4150",
          "name" : "Tile, Round 2 x 2",
          "category" : {
            "id" : "117",
            "name" : "Tile, Round"
          }
        },
        "color" : {
          "id" : "7",
          "name" : "Blue",
          "rgb" : "0057A6"
        }
      }, {
        lastUpdate: new Date(),
        "id" : "4654127",
        "element" : {
          "id" : "4150",
          "name" : "Tile, Round 2 x 2",
          "category" : {
            "id" : "117",
            "name" : "Tile, Round"
          }
        },
        "color" : {
          "id" : "104",
          "name" : "Bright Pink",
          "rgb" : "F7BCDA"
        }
      }, {
        lastUpdate: new Date(),
        "id" : "4541223",
        "element" : {
          "id" : "4150",
          "name" : "Tile, Round 2 x 2",
          "category" : {
            "id" : "117",
            "name" : "Tile, Round"
          }
        },
        "color" : {
          "id" : "85",
          "name" : "Dark Bluish Gray",
          "rgb" : "595D60"
        }
      }, {
        lastUpdate: new Date(),
        "id" : "4620079",
        "element" : {
          "id" : "14769",
          "name" : "Tile, Round 2 x 2 with Bottom Stud Holder",
          "category" : {
            "id" : "117",
            "name" : "Tile, Round"
          }
        },
        "color" : {
          "id" : "85",
          "name" : "Dark Bluish Gray",
          "rgb" : "595D60"
        }
      }, {
        lastUpdate: new Date(),
        "id" : "6064113",
        "element" : {
          "id" : "4150",
          "name" : "Tile, Round 2 x 2",
          "category" : {
            "id" : "117",
            "name" : "Tile, Round"
          }
        },
        "color" : {
          "id" : "80",
          "name" : "Dark Green",
          "rgb" : "2E5543"
        }
      }, {
        lastUpdate: new Date(),
        "id" : "4209382",
        "element" : {
          "id" : "4150",
          "name" : "Tile, Round 2 x 2",
          "category" : {
            "id" : "117",
            "name" : "Tile, Round"
          }
        },
        "color" : {
          "id" : "59",
          "name" : "Dark Red",
          "rgb" : "6A0E15"
        }
      }, {
        lastUpdate: new Date(),
        "id" : "4625275",
        "element" : {
          "id" : "4150",
          "name" : "Tile, Round 2 x 2",
          "category" : {
            "id" : "117",
            "name" : "Tile, Round"
          }
        },
        "color" : {
          "id" : "69",
          "name" : "Dark Tan",
          "rgb" : "B89869"
        }
      }, {
        lastUpdate: new Date(),
        "id" : "4239006",
        "element" : {
          "id" : "4150",
          "name" : "Tile, Round 2 x 2",
          "category" : {
            "id" : "117",
            "name" : "Tile, Round"
          }
        },
        "color" : {
          "id" : "6",
          "name" : "Green",
          "rgb" : "00923D"
        }
      } ];
   }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const id = routeParams.get('id');
    this.franchise= this.franchiseService.getFranchise(Number(id));
  }

}