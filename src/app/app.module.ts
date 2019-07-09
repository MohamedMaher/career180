import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheaderComponent } from './cheader/cheader.component';
import { CmenuComponent } from './cmenu/cmenu.component';
import { CfooterComponent } from './cfooter/cfooter.component';
import { CexploreComponent } from './cexplore/cexplore.component';
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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ExplcareerComponent } from './explcareer/explcareer.component';
import { InsightsComponent } from './insights/insights.component';
import { EvtelementComponent } from './evtelement/evtelement.component';
import { ExpelementComponent } from './expelement/expelement.component';
import { VidelementComponent } from './videlement/videlement.component';
import { QueselementComponent } from './queselement/queselement.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PartentersComponent } from './partenters/partenters.component';
import { CareerhrComponent } from './careerhr/careerhr.component';
import { SignupComponent } from './signup/signup/signup.component';
import { Form1Component } from './signup/form1/form1.component';
import { PersonalComponent } from './signup/personal/personal.component';
import { EducationComponent } from './signup/education/education.component';
import { ExperienceComponent } from './signup/experience/experience.component';
import { InterestsComponent } from './signup/interests/interests.component';
import { AppiontmentsComponent } from './signup/appiontments/appiontments.component';
import { CvComponent } from './signup/cv/cv.component';
import { SigninComponent } from './signin/signin/signin.component';

const appRoutes: Routes = [
  { path: 'chome', component: ChomeComponent},
  { path: 'cevents', component: CeventsComponent},
  { path: 'cexperts', component: CexpertsComponent},
  { path: 'cquestions', component: CquestionsComponent},
  { path: 'cabout', component: CaboutComponent},
  { path: 'cpoints', component: CpointsComponent},
  { path: 'signup', component: SignupComponent},
  { path: '',redirectTo: '/chome',pathMatch: 'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    CheaderComponent,
    CmenuComponent,
    CfooterComponent,
    CexploreComponent,
    CeventsComponent,
    CexpertsComponent,
    CvideosComponent,
    CquestionsComponent,
    CpartnersComponent,
    ChomeComponent,
    CaboutComponent,
    CpointsComponent,
    ExplcareerComponent,
    InsightsComponent,
    EvtelementComponent,
    ExpelementComponent,
    VidelementComponent,
    QueselementComponent,
    ContactusComponent,
    PartentersComponent,
    CareerhrComponent,
    SignupComponent,
    Form1Component,
    PersonalComponent,
    EducationComponent,
    ExperienceComponent,
    InterestsComponent,
    AppiontmentsComponent,
    CvComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgbModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
