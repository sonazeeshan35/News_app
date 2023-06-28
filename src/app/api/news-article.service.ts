import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsArticleService {

  constructor(private httpClient:HttpClient) { 

  }
  getTopHeadLines() :Observable<any> {
return this.httpClient.get(
'${environment.url_base}top-headlines?country=il&apiKey=${environment.api_key} '

)
}

getArticleByCategory(category):Observable<any>{

return this.httpClient.get(
  '${environment.url_base}top-headlines?country=de&${category}category=sport&apiKey=${environment.api_key}'
)
}




}
