import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { cacaModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    cacaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
