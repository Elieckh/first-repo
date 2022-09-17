import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CVComponent } from './Components/cv/cv.component';
import { ArticlesAppComponent } from './Components/articles-app/articles-app.component';
import { NotesAppComponent } from './Components/notes-app/notes-app.component';
import { WeatherAppComponent } from './Components/weather-app/weather-app.component';
import { ArticleDetailsComponent } from './Components/articles-app/article-details/article-details.component';
import { ArticleFormsComponent } from './Components/articles-app/article-forms/article-forms.component';
import { ArticleViewComponent } from './Components/articles-app/article-view/article-view.component';
import { WorkExperienceComponent } from './Components/work-experience/work-experience.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { AchievementComponent } from './Components/achievement/achievement.component';
import { EducationComponent } from './Components/education/education.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cv', component: CVComponent,
    children:[
      { path: '', component: WorkExperienceComponent},
      { path: 'work-Experience', component: WorkExperienceComponent},
      { path: 'Skills', component: SkillsComponent},
      { path: 'Education', component: EducationComponent},
      { path: 'Achievement', component: AchievementComponent}
    ]
},
  {
    path: 'article-app', component: ArticlesAppComponent,
    children: [
      { path: '', component: ArticleViewComponent },
      { path: 'view', component: ArticleViewComponent },
      { path: 'formview', component: ArticleFormsComponent },
      { path: 'formdetails/:id', component: ArticleDetailsComponent }]
  },
  { path: 'notes-app', component: NotesAppComponent},
  { path: 'weather-app', component: WeatherAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
