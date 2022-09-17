import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from 'src/app/Services/article-service.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  constructor(private article: ArticleServiceService) { }
  articleArray: any = [];

  getArticleData() {

    this.article.getArticles().subscribe((results) => {
      this.articleArray = results
      this.articleArray.sort(function(a:any, b:any){return b.id-a.id})
    })

  }

  ngOnInit(): void {

    this.getArticleData()

  }

}
