import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './app/components/navbar/navbar.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NabvarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
