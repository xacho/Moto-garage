import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss']
})
export class SearchButtonComponent implements OnInit {
public filterList: Array<any> = [
 ["4 stroke", "single stroke", "Water Cooled", "Air cooled"],      
["Gasoline", "Gas", "Petrol", ""],[]

]

  constructor() { }

  ngOnInit() {
  }

}
