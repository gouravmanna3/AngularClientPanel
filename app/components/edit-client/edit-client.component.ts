import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { Client } from '../../models/Client';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-edit-client',
templateUrl: './edit-client.component.html',
styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
id:string;
client:Client={
firstname:'',
lastname:'',
  email:'',
  phone:'',
  balance:0
  }
disableBalanceOnEdit:boolean=true;
constructor(public clientService:ClientService,
    public router:Router,
    public route:ActivatedRoute,
    private flashMessagesService:FlashMessagesService) { }

ngOnInit() {
    //get id
    this.id=this.route.snapshot.params['id'];

    //get client
this.clientService.getClient(this.id).subscribe(client =>{
this.client=client;

    });
  }
onSubmit({value,valid}:{value:Client,valid:boolean}){
    console.log(value);


  if(!valid){
this.flashMessagesService.show('Please fill in all detail', {cssClass:'alert-danger', timeout: 4000 });
   // alert("Please fill in all detail");
this.router.navigate(['edit-client/'+this.id]);
  }
else{
    //update client
this.clientService.updateClient(this.id,this.client);
this.flashMessagesService.show('Client Updated!', {cssClass:'alert-success', timeout: 4000 });
    //alert("Client Updated");
this.router.navigate(['/client/'+this.id]);
  } 

  }


  }
