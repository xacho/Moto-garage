import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
public footerList:Array<Object>=
        [
              {
                head:'Company',
                list:[
                      {
                        name:'About Us',
                        link:'about'
                      },
                      {
                        name:'Contacts',
                        link:''
                      },
                      {
                      name:'Carers',
                      link:''
                      },
                    ],
              },

              {
                head:'Information',
                list:[
                      {
                        name:'Site Map',
                        link:''
                      },
                      {
                        name:'Shop',
                        link:''
                      },
                      {
                        name:'Search Tearms',
                        link:''
                      }
                    ],
              },

              {
                head:'Account',
                list:[
                      {
                        name:'My Account',
                        link:'',
                      },
                      {
                        name:'My Garage',
                        link:''
                      },
                      {
                        name:'Shopping Cart',
                        link:''
                      }
                    ]
              }
        ]
public footerLogo:Array<object>=[
{
  name:'Twitter',
  logo:'/assets/footerSocial/twitter.png',
  link:'https://twitter.com/',
},
{
  name:'Facebook',
  logo:'/assets/footerSocial/facebook.png',
  link:'https://www.facebook.com/',
},
{
  name:'Pinterest',
  logo:'/assets/footerSocial/pinterest.png',
  link:'https://www.pinterest.com/',
},
{
  name:'Google Plus',
  logo:'/assets/footerSocial/google-plus.png',
  link:'https://plus.google.com/',
},
{
  name:'Youtube',
  logo:'/assets/footerSocial/youtube.png',
  link:'https://www.youtube.com/',
},
{
  name:'Share',
  logo:'/assets/footerSocial/social-normal.png',
  link:'',
}

]        

  

  constructor() { }

  ngOnInit() {
  }

}
