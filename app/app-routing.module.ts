import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';
import { HomeComponent } from './home/home.component';
import { DiscoverComponent } from './discover/discover.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StaffComponent } from './staff/staff.component';
import { RescueTeamComponent } from './rescue-team/rescue-team.component';
import { FullCycleComponent } from './full-cycle/full-cycle.component';
import { DedicatedTeamComponent } from './dedicated-team/dedicated-team.component';
import { ContactComponent } from './contact/contact.component';




const routes: Routes = [
  { path: 'successStories', component: SuccessStoriesComponent, },
  { path: 'home', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent},
  { path: 'discover', component: DiscoverComponent },
  { path: 'staff', component: StaffComponent},
  { path: 'dedicatedTeam', component: DedicatedTeamComponent},
  { path: 'fullCycle', component: FullCycleComponent},
  { path: 'rescueTeam', component: RescueTeamComponent},
  { path: 'Contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
