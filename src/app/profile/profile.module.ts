import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NbLayoutModule,
  NbButtonModule,
  NbIconModule,
  NbCardModule,
  NbBadgeModule,
  NbUserModule,
  NbProgressBarModule,
  NbInputModule, NbSpinnerModule
} from "@nebular/theme";
import {NbEvaIconsModule} from "@nebular/eva-icons";

import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { SkillsComponent } from './skills/skills.component';
import { SocialComponent } from './social/social.component';
import {MglTimelineModule} from "angular-mgl-timeline";



@NgModule({
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    WorkComponent,
    SkillsComponent,
    SocialComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NbLayoutModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    NbCardModule,
    MglTimelineModule,
    NbBadgeModule,
    NbUserModule,
    NbProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbSpinnerModule
  ]
})
export class ProfileModule { }
