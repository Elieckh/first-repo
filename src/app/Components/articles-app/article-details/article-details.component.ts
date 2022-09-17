import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleServiceService } from 'src/app/Services/article-service.service';


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ArticleServiceService:ArticleServiceService) { }
  myid: any;
  articleData:any = [];
  
  ngOnInit(): void {

    this.myid = this.route.snapshot.params['id']
    this.ArticleServiceService.getArticleDetails(this.myid).subscribe((res) => this.articleData = res )
  }

}
