import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { CoursesComponent } from './main/courses/courses.component';
import { AboutUsComponent } from './main/about-us/about-us.component';
import { FreshNewsComponent } from './main/fresh-news/fresh-news.component';
import { ContactUsComponent } from './main/contact-us/contact-us.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import {RouterModule} from "@angular/router";
import {MainComponent} from "./main/main.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    AboutUsComponent,
    FreshNewsComponent,
    ContactUsComponent,
    NavbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "", component: MainComponent},
      {path: "**", redirectTo: "", pathMatch: 'full'}
      ],
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
