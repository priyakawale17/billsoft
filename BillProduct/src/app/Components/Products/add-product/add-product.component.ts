import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppServiceService } from 'src/app/app-service.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private service: AppServiceService) { }

  ngOnInit(): void {
  }
  userData= new FormGroup({
    ProductCategoryId: new FormControl (''),
    ProductName: new FormControl(''),
    ProductCode: new FormControl(''),
    UnitOfMesurementId: new FormControl (''),
    CompaniesId: new FormControl(''),
    Companies: new FormControl(''),
    Date: new FormControl(''),
    hsn: new FormControl(''),
    
    
  });

  addProductFunction(){
    console.log(this.userData)
    this.service.addProdToDb(this.userData.value).subscribe((data) => {
    console.warn('this is inside post',data)
  })
  console.log(this.userData.value)
}
}
