import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import {CardStoryComponent} from './card-story/card-story.component';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CardWorkComponent } from './card-work/card-work.component';
import { HomeComponent } from './home/home.component';
import { DiscoverComponent } from './discover/discover.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PersonalComponent } from './personal/personal.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { AlliesComponent } from './allies/allies.component';
import { CardTestimonialComponent } from './card-testimonial/card-testimonial.component';
import { FullCycleComponent } from './full-cycle/full-cycle.component';
import { RescueTeamComponent } from './rescue-team/rescue-team.component';
import { DedicatedTeamComponent } from './dedicated-team/dedicated-team.component';
import { StaffComponent } from './staff/staff.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardStoryComponent,
    SuccessStoriesComponent,
    TestimonialComponent,
    CardWorkComponent,
    HomeComponent,
    DiscoverComponent,
    AboutUsComponent,
    PersonalComponent,
    CarrouselComponent,
    AlliesComponent,
    CardTestimonialComponent,
    FullCycleComponent,
    RescueTeamComponent,
    DedicatedTeamComponent,
    StaffComponent,
    FooterComponent,
    ContactComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
