import { CapitalizePipe } from './capitalize-pipe';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { HerosComponent } from './heros/heros.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeroTableDisplayComponent } from './hero-table-display/hero-table-display.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { DynamicStyleComponent } from './dynamic-style/dynamic-style.component';
import { NamePipeExampleComponent } from './name-pipe-example/name-pipe-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    SideMenuComponent,
    HeroTableDisplayComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    DynamicStyleComponent,
    NamePipeExampleComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
