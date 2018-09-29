import { Injectable } from '@angular/core';
import { Subscribable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL, HTTP_OPTIONS } from '../constans';

@Injectable({
  providedIn: 'root'
})
export class GoodGaugeService {

  private api_url: string;
  private http_options: any;

  constructor(private $http: HttpClient) { 
    this.api_url = API_URL;
    this.http_options = HTTP_OPTIONS;
  }

  get_good_rate(): Subscribable<any> {
    return this.$http.post(
      this.api_url,
      {
        "method": "get_good_rate",
        "jsonrpc": "2.0",
        "id": "0",
        "params": {},
      },
      this.http_options,
    );
  }

}
