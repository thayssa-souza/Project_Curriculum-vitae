import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoGeneralComponent } from './components/info-general/info-general.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FormsComponent } from './components/forms/forms.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExperiencesComponent,
    FooterComponent,
    InfoGeneralComponent,
    ExperienceComponent,
    FormsComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, MatIconModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
