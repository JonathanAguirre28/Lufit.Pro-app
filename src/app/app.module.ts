import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/nabvar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PlansComponent } from './components/plans/plans.component';
import { HelpComponent } from './components/help/help.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { ChangesComponent } from './components/changes/changes.component';
import { SupplementsComponent } from './components/supplements/supplements.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { PictureModalComponent } from './components/picture-modal/picture-modal.component';
import { GALLERY_CONFIG, GalleryConfig, GalleryModule } from 'ng-gallery';
import { BeforeAfterComponent } from './components/before-after/before-after.component';
import { EmblaCarouselLucianaComponent } from './components/embla-carousel-luciana/embla-carousel-luciana.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    NavMenuComponent,
    AboutMeComponent,
    PlansComponent,
    HelpComponent,
    ConsultationComponent,
    ChangesComponent,
    SupplementsComponent,
    ContactComponent,
    FooterComponent,
    PictureModalComponent,
    BeforeAfterComponent,
    EmblaCarouselLucianaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    GalleryModule
  ],
  providers: [
    {
      provide: GALLERY_CONFIG,
      useValue: {
        autoHeight: true,
        imageSize: 'cover'
      } as GalleryConfig
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
