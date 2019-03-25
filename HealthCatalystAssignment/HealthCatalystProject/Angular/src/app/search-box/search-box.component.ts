import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  searchString: string;

  constructor() { }

  ngOnInit() {
  }

  onSearch(searchString: string): any {
    this.searchString = searchString;
  }
}
