import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { GalleryComponent } from './gallery/gallery.component';

import { CarouselComponent } from './home/carousel/carousel.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [
    HomeComponent,
    ContactComponent,
    PricingComponent,
    GalleryComponent,
    CarouselComponent,
    UsersComponent,
    ProfileComponent
  ]
})
export class PagesModule { }
