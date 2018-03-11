import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

let apiUrl = "https://www.reddit.com/r";
@Injectable()
export class AuthServiceProvider {

  http:any;
  baseUrl: string;

  constructor( http: Http) {
    console.log('Hello AuthServiceProvider Provider');
    this.http = http;
    this.baseUrl = "https://www.reddit.com/r";
  }

  getIssueDetails() {
    return this.http.get("https://jira.atlassian.com/rest/api/2/issue/JRA-9");
  }

  getPosts(category,limit){
    return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit).map(res => res.json());
  }


  
}
