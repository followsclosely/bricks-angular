import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-piece-locator',
  templateUrl: './piece-locator.component.html',
  styleUrls: ['./piece-locator.component.css']
})
export class PieceLocatorComponent implements OnInit {

  viewControl = new FormControl('popular');
  searchFormControl = new FormControl('');

  filterModes = [
    {value: 'all',     display: 'All Pieces'},
    {value: 'recent',  display: 'Recently Added Pieces'},
    {value: 'popular', display: 'Popular Pieces'},
  ];

  category: string;
  categories = [
    {display: 'Brick'},
    {display: 'Brick, Round'},
    {display: 'Brick, Modified'},
    {display: 'Slope'},
    {display: 'Slope, Curved'},
    {display: 'Plate, Round'},
    {display: 'Plate, Modified'},
    {display: 'Plate, Bracket'},
    {display: 'Plate, Wedge'},
    {display: 'Tile, Round'},
    {display: 'Tile, Modified'},
    {display: 'Tile, Bracket'},
    {display: 'Plate, Wedge'},
  ];

  constructor() { }

  ngOnInit() {
  }

}