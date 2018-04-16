import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from "@angular/router";
import { Form } from "@angular/forms";
import { NavigationComponent } from './navigation/navigation.component';
import { HighlightDirective } from './highlight.directive';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { SliderModule } from 'angular-image-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChoosboxComponent } from './choosbox/choosbox.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HighlightDirective,
    HomeComponent,
    CatalogComponent,
    BlogComponent,
    ContactComponent,
    ShopComponent,
    AboutComponent,
    FooterComponent,
    SliderComponent,
    ChoosboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
