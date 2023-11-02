import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/nabvar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PlansComponent } from './components/plans/plans.component';
import { HelpComponent } from './components/help/help.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { ChangesComponent } from './components/changes/changes.component';
import { SupplementsComponent } from './components/supplements/supplements.component';
import { ContactComponent } from './components/contact/contact.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
