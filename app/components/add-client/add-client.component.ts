import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Client } from '../../models/Client';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client:Client={
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    balance:0
}
disableBalanceOnAdd:boolean=true;
  constructor(public router:Router,public clientService:ClientService) { }

  ngOnInit() {
  }
onSubmit({value,valid}:{value:Client,valid:boolean}){
  if(this.disableBalanceOnAdd){
    value.balance=0;
  }
if(!valid){
  alert("Please fill in all detail");
  this.router.navigate(['add-client']);
}
else{
  this.clientService.newClient(value);
  alert("New Client Added");
  this.router.navigate(['/']);
}

}
}
