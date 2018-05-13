import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
public mapParts:Array<string>=[
  'Engine','Tiers', 'Wheels','Seats','Hand Controls'
]
  constructor() {}

  ngOnInit() {
  }

}
