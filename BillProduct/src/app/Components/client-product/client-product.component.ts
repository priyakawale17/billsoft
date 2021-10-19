import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-client-product',
  templateUrl: './client-product.component.html',
  styleUrls: ['./client-product.component.css']
})
export class ClientProductComponent implements OnInit {
  ClientList:any;
  ProductList:any;
  constructor(private service:AppServiceService) { }

  ngOnInit(): void {
    this.getDataFromApi();
    this.getProductFromApi();
  }
  getDataFromApi(){
    this.service.getData().subscribe(response =>{
      console.log(response)
      this.ClientList=response;
      console.log("this is client list" + this.ClientList)
      }
    )
  }
  getProductFromApi(){
    this.service.getProduct().subscribe(response =>{
      console.log(response)
      this.ProductList=response;
        
    }
      )
  }

}
