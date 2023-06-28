import { Component } from '@angular/core';
import { NewsArticleService } from '../api/news-article.service';
import { resourceLimits } from 'worker_threads';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
SelectedCategory = "Health"
topHeadLines = []

  constructor(private articleService:NewsArticleService) {
    articleService.getTopHeadLines().subscribe((results) =>{
     
    //  this.topHeadLines.push(...results.article)
      console.log(this.topHeadLines);
    })
  
 articleService.getArticleByCategory(this.SelectedCategory).subscribe((results)=>{
  //console.log(results);
})
}

}
