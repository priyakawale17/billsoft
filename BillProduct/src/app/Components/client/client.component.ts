import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';



export interface PeriodicElement {
  Name:string;
  // Discreption:string;
  Address:string;
  AltContactNo:number;
  CityId:number;
  ContactNo:number;
  CreatedBy:number;
  CreatedDate:string;
  EmailId:string;
  IsActive:number;
  ModifyBy:number;
  ModifyDate:string;
  OpeningBal:number;
  OpeningBalDate:string;
  PartiesGroupId:number;
  PartiesType:string;
  PinCode:number;
  StateId:number;

}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  user:any;
  dataArray!: PeriodicElement[]; 
 

  constructor(private service : AppServiceService) { }

  ngOnInit(): void {
    this.getDataFromApi();
    console.log()
  }

  getDataFromApi(){
    this.service.getData().subscribe(response =>{
      console.log(response)
      this.dataSource.data = response as PeriodicElement[]
console.log( this.dataSource.data  )    
    }
      )
  }

  displayedColumns: string[] = ['ClientId', 'Name', 'EmailId','PinCode'];
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
