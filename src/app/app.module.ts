import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheaderComponent } from './cheader/cheader.component';
import { CmenuComponent } from './cmenu/cmenu.component';
import { CfooterComponent } from './cfooter/cfooter.component';
import { CexploreComponent } from './cexplore/cexplore.component';
import { CinsightsComponent } from './cinsights/cinsights.component';
import { CeventsComponent } from './cevents/cevents.component';
import { CexpertsComponent } from './cexperts/cexperts.component';
import { CvideosComponent } from './cvideos/cvideos.component';
import { CquestionsComponent } from './cquestions/cquestions.component';
import { CpartnersComponent } from './cpartners/cpartners.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ChomeComponent } from './chome/chome.component';
import { RouterModule, Routes } from '@angular/router';
import { CaboutComponent } from './cabout/cabout.component';
import { CpointsComponent } from './cpoints/cpoints.component';

const appRoutes: Routes = [
  { path: 'chome', component: ChomeComponent},
  { path: 'cevents', component: CeventsComponent},
  { path: 'cexperts', component: CexpertsComponent},
  { path: 'cquestions', component: CquestionsComponent},
  { path: 'cabout', component: CaboutComponent},
  { path: 'cpoints', component: CpointsComponent},
  { path: '',redirectTo: '/chome',pathMatch: 'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    CheaderComponent,
    CmenuComponent,
    CfooterComponent,
    CexploreComponent,
    CinsightsComponent,
    CeventsComponent,
    CexpertsComponent,
    CvideosComponent,
    CquestionsComponent,
    CpartnersComponent,
    ChomeComponent,
    CaboutComponent,
    CpointsComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
