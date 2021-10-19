import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(private service:AppServiceService) { }

  ngOnInit(): void {
  }
  clientData = new FormGroup({
    clientName : new FormControl(''),
    ContactNo: new FormControl(''),
    PartiesGrouId : new FormControl(''),
    StateId: new FormControl(''), 
    CityId : new FormControl(''),
    Address: new FormControl(''), 
    EmailId : new FormControl(''),
    AltContactNo: new FormControl(''),
    OpeningBalance : new FormControl(''),
    OpeningBalanceDate: new FormControl(''),
    BranchId : new FormControl(''),
    PartiesType: new FormControl(''),
    Pincode: new FormControl('')

  })
  addClientFunction(){
    this.service.addClientToDb(this.clientData.value).subscribe((data) => {
    console.warn('this is inside post',data)
  })
  console.log(this.clientData.value)
  }
}
