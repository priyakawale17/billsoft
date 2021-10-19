import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';



export interface PeriodicElement {
  CompaniesId:string;
  // Discreption:string;
  GSTId:number;
  HSNNo:string;
  ProductCategoriesId:number;
  CreatedBy:number;
  CreatedDate:string;
  IsActive:number;
  ModifyBy:number;
  ModifyDate:string;

  ProductCode:string;
  ProductId:number;
  ProductName:string;
  UnitOfMesurementId:number;
  // PinCode:number;
  // StateId:25

}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  user:any;
  dataArray!: PeriodicElement[]; 
 

  constructor(private service : AppServiceService) { }

  ngOnInit(): void {
    this.getProductFromApi();
    console.log()
  }

  getProductFromApi(){
    this.service.getProduct().subscribe(response =>{
      console.log(response)
      this.dataSource.data = response as PeriodicElement[]
console.log( this.dataSource.data  )    
    }
      )
  }

  displayedColumns: string[] = ['ProductId', 'ProductCode', 'ProductName','GSTId'];
  dataSource = new MatTableDataSource(this.dataArray);
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
