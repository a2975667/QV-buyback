import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { SummaryComponent } from './summary/summary.component';
import { OptionComponent } from './option/option.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { DonationComponent } from './donation/donation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LikertComponent } from './likert/likert.component';
import { SurveyComponent } from './survey/survey.component';
import { DemographicComponent } from './demographic/demographic.component';
import { CompleteComponent } from './complete/complete.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { VideoComponent } from './video/video.component';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    OptionComponent,
    WelcomeComponent,
    QuestionnaireComponent,
    DonationComponent,
    LikertComponent,
    SurveyComponent,
    DemographicComponent,
    CompleteComponent,
    VideoComponent
  ],
  imports: [
    ReactiveFormsModule,
    Ng5SliderModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProgressbarModule.forRoot(),
    FormsModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
