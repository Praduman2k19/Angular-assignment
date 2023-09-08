import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  getData(obj:any){
    let url ='http://appspos.apdeliver.com/AppsPOSDemoSAS/api/apis/Get_Category_By_ProductId'




    // let headers = new HttpHeaders().set('Authorization', '');

    // headers.set('Accept', 'application/json');
    return this.http.post(url, obj);


  }

}

