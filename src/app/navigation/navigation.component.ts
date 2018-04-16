import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public navList:Array<Object>= [
    {
      name:'Home',
      link:'home',
      isActive:true,
    },
    {
      name:'Cataloge',
      link:'catalog',
      isActive:false,
    },
    {
      name:'Shop',
      link:'shop',
      isActive:false,
    },
    {
      name:'Blog',
      link:'blog',
      isActive:false,
    },
    {
      name:'About Us',
      link:'about',
      isActive:false,
    },
    {
      name:'Contacts',
      link:'contacts',
      isActive:false,
    }
  ]
  public navTools:Array<object>=[
    {
      name:'search',
      link:'',
      logo:'/assets/search.png',
      isActive:false,
    },
    {
      name:'favorite',
      link:'./pages',
      logo:'/assets/favorite.png',
      isActive:false,
    },
    {
      name:'basket',
      link:'./',
      logo:'/assets/basket.png',
      isActive:false,
    },
    {
      name:'Account',
      link:'./',
      logo:'/assets/account.png',
      isActive:false,
    },
   /* {
      name:'',
      link:'./',
      logo:'/assets/'
    }*/
  
  ]
  

  ngOnInit() {
  }

}
