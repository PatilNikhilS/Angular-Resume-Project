import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NameTemplatComponent } from './name-templat/name-templat.component';
import { ObjectiveComponent } from './objective/objective.component';
import { EducationComponent } from './education/education.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { ExtraCarricularComponent } from './extra-carricular/extra-carricular.component';
import { LanguagesComponent } from './languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    NameTemplatComponent,
    ObjectiveComponent,
    EducationComponent,
    ProjectComponent,
    SkillsComponent,
    ExtraCarricularComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
