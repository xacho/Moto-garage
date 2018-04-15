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
      link:'home'
    },
    {
      name:'Cataloge',
      link:'catalog'
    },
    {
      name:'Shop',
      link:'shop'
    },
    {
      name:'Blog',
      link:'blog'
    },
    {
      name:'About Us',
      link:'about'
    },
    {
      name:'Contacts',
      link:'contacts'
    }
  ]
  public navTools:Array<object>=[
    {
      name:'search',
      link:'',
      logo:'/assets/search.png'
    },
    {
      name:'favorite',
      link:'./pages',
      logo:'/assets/favorite.png'
    },
    {
      name:'basket',
      link:'./',
      logo:'/assets/basket.png'
    },
    {
      name:'Account',
      link:'./',
      logo:'/assets/account.png'
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
