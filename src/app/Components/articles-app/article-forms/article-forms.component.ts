import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from 'src/app/Services/article-service.service';


@Component({
  selector: 'app-article-forms',
  templateUrl: './article-forms.component.html',
  styleUrls: ['./article-forms.component.css']
})
export class ArticleFormsComponent implements OnInit {

  constructor(private article:ArticleServiceService) { }

  articleArray:any=[]

  ngOnInit(): void {

  }

 postData(data:any){

  this.article.postArticles(data).subscribe((result)=>this.articleArray=result)

  }

}
