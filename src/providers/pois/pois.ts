import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PoisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PoisProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PoisProvider Provider');
  }

  public getPois(longitude, latitude) {

    return this.http.get(
      `http://papi.minube.com/pois?
      api_key=GKd88J
      &lang=en
      &subcategory_id=29
      &longitude=${longitude}
      &latitude=${latitude}
      `
    );

  }

}
