import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  constructor(private http:HttpClient) {}

    getArticles(){
     return this.http.get("http://localhost:3000/Articles")
    } 

    postArticles(data:any){
      return this.http.post("http://localhost:3000/Articles", data)
     }


     getArticleDetails(id:any){
      return this.http.get("http://localhost:3000/Articles/"+id)
     }


}
