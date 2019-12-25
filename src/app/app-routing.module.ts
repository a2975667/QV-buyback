import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { DonationComponent } from './donation/donation.component';
import { LikertComponent } from './likert/likert.component';
import { DemographicComponent } from './demographic/demographic.component';
import { CompleteComponent } from './complete/complete.component';


const routes: Routes = [
  { path: 'welcome/:id', component: WelcomeComponent },
  { path: 'demographic', component: DemographicComponent },
  { path: 'qv', component: QuestionnaireComponent},
  { path: 'donation', component: DonationComponent},
  { path: 'likert', component: LikertComponent},
  { path: 'complete', component: CompleteComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
