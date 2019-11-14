import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { HeaderComponent } from './comps/general/header/header.component';
import { NevigationComponent } from './comps/general/nevigation/nevigation.component';
import { BeastsPanelComponent } from './comps/panels/beasts-panel/beasts-panel.component';
import { BeastCardComponent } from './comps/cards/beast-card/beast-card.component';
import { BirdsPanelComponent } from './comps/panels/birds-panel/birds-panel.component';
import { BirdCardComponent } from './comps/cards/bird-card/bird-card.component';
import { WildsPanelComponent } from './comps/panels/wilds-panel/wilds-panel.component';
import { WildCardComponent } from './comps/cards/wild-card/wild-card.component';
import { PaginatorComponent } from './comps/general/paginator/paginator.component';
import { FooterComponent } from './comps/general/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NevigationComponent,
    BeastsPanelComponent,
    BeastCardComponent,
    BirdsPanelComponent,
    BirdCardComponent,
    WildsPanelComponent,
    WildCardComponent,
    PaginatorComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
