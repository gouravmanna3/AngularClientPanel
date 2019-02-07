import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList,AngularFireObject} from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';


@Injectable({
providedIn: 'root'
})
export class ClientService {
clientsRef:AngularFireList<any>;
client:Observable<any>;  //client: Observable<any[]>; 
  clientRef2: AngularFireObject<any>;
  client2:Observable<any>;
constructor(public af:AngularFireDatabase
  ) {
this.clientsRef = af.list('/clients');
   //this.client = this.clients.list('/clients').valueChanges(); 

//this.clients = this.af.list('/clients');
this.client = this.clientsRef.snapshotChanges().pipe(
map(changes =>
changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
  )
); 
console.log(this.client);
}

getClients(){
     console.log(this.client);
    return this.client;
  }

newClient(client:Client){
this.clientsRef.push(client);
      console.log(this.clientsRef);
  } 


getClient(id:string){
  this.clientRef2=this.af.object('/clients/'+id);
this.client2=this.clientRef2.valueChanges();
return this.client2;
}
updateClient(id:string,client:Client){
  return this.clientsRef.update(id,client);
}

deleteClient(id:string){
return this.clientsRef.remove(id);
}
}
