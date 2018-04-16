import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
public sliderImg:Array<string>
  constructor() { }

  ngOnInit() {
    this.sliderImg=[
      './assets/bike1.png', 
      '/assets/bike2.png',
      '/assets/bike3.png'
    ]
  }

}
