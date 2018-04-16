import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choosbox',
  templateUrl: './choosbox.component.html',
  styleUrls: ['./choosbox.component.scss']
})
export class ChoosboxComponent{
public choosList:Array<object>=[
{
  head:'Motorcycle',
  logo:'/assets/logo/moto.png',
  link:'',
  name:''
},
{
  head:'Scooter',
  logo:'/assets/logo/scooter.png',
  link:'',
  name:''
},
{
  head:'ATVS',
  logo:'/assets/logo/quad.png',
  link:'',
  name:''
},
{
  head:'UTVS',
  logo:'/assets/logo/buggy.png',
  link:'',
  name:''
},
{
  head:'PWC',
  logo:'/assets/logo/water.png',
  link:'',
  name:''
},
{
  head:'Snowmobile',
  logo:'/assets/logo/snow.png',
  link:'',
  name:''
},
{
  head:'Other',
  logo:'/assets/logo/other.png',
  link:'',
  name:''
},


]
  constructor() { }

  ngOnInit() {
  }

}
