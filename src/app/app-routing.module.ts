import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { BlogComponent } from "./blog/blog.component";
import { ShopComponent } from "./shop/shop.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

const appRoutes: Routes = [
    {
      path: 'home',
      component:HomeComponent,
      outlet: ''
    },
    {
      path: 'catalog',
      component: CatalogComponent,
    },
    {
        path: 'shop',
        component: ShopComponent,
      },
    {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    { path: '**', redirectTo: 'home' }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ],
    providers: [
    ]
  })
  export class AppRoutingModule { }
  
