import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CVComponent } from './Components/cv/cv.component';
import { ArticlesAppComponent } from './Components/articles-app/articles-app.component';
import { NotesAppComponent } from './Components/notes-app/notes-app.component';
import { WeatherAppComponent } from './Components/weather-app/weather-app.component';
import {FormsModule} from '@angular/forms';
import { ArticleDetailsComponent } from './Components/articles-app/article-details/article-details.component';
import { ArticleFormsComponent } from './Components/articles-app/article-forms/article-forms.component';
import { ArticleViewComponent } from './Components/articles-app/article-view/article-view.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkExperienceComponent } from './Components/work-experience/work-experience.component';
import { EducationComponent } from './Components/education/education.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { AchievementComponent } from './Components/achievement/achievement.component';
import { ChattComponent } from './Components/chatt/chatt.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CVComponent,
    ArticlesAppComponent,
    NotesAppComponent,
    WeatherAppComponent,
    ArticleFormsComponent,
    ArticleDetailsComponent,
    ArticleViewComponent,
    WorkExperienceComponent,
    EducationComponent,
    SkillsComponent,
    AchievementComponent,
    ChattComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot()
  ],
  providers:  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
