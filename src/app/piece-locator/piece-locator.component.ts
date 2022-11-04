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

  constructor() { }

  ngOnInit() {
  }

}