import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampionSelectComponent } from './components/champion-select/champion-select.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChampionCardComponent } from './components/champion-card/champion-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionSelectComponent,
    ChampionCardComponent,
    NavbarComponent,
    ChampionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
