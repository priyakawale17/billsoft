import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  URL = "http://localhost:3001/getData";
  URLproduct = "http://localhost:3001/getProduct";
  URLAddProduct = "http://localhost:3001/addProduct";
  URLAddClient = "http://localhost:3001/addClient";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  getData(): Observable<any>{
    console.log()
    return this.http.get(this.URL)
  }
  
  getProduct(): Observable<any>{
    console.log()
    return this.http.get(this.URLproduct)
  }
  addProdToDb(userData:any){
    return this.http.post<any>(this.URLAddProduct,userData,{headers:this.httpHeaders})

  }
  addClientToDb(clientData:any){
    return this.http.post<any>(this.URLAddClient,clientData,{headers:this.httpHeaders})

  }
  
}
