import { BrowserModule } from'@angular/platform-browser';
import { NgModule } from'@angular/core';
import {RouterModule,Routes} from'@angular/router';
import {FormsModule, ReactiveFormsModule} from'@angular/forms';
import { FlashMessagesModule } from'angular2-flash-messages';

//angularfire imports
import {AngularFireModule} from'angularfire2';
import {AngularFireDatabaseModule,AngularFireDatabase} from'angularfire2/database';
import {AngularFireAuth} from'angularfire2/auth';
import { AngularFirestore } from'angularfire2/firestore';

//component import
import { AppComponent } from'./app.component';
import { AddClientComponent } from'./components/add-client/add-client.component';
import { ClientDetailsComponent } from'./components/client-details/client-details.component';
import { ClientsComponent } from'./components/clients/clients.component';
import { DashboardComponent } from'./components/dashboard/dashboard.component';
import { EditClientComponent } from'./components/edit-client/edit-client.component';
import { NavbarComponent } from'./components/navbar/navbar.component';
import { SidebarComponent } from'./components/sidebar/sidebar.component';
import { LoginComponent } from'./components/login/login.component';
import { RegisterComponent } from'./components/register/register.component';
import { PageNotFoundComponent } from'./components/page-not-found/page-not-found.component';

//service imports
import {ClientService} from'./services/client.service';
import {AuthService} from'./services/auth.service';
//import guards
import { AuthGuard } from'./guards/auth.guards';

const appRoutes:Routes=[
{path:'',component:DashboardComponent, canActivate:[AuthGuard]},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'add-client',component:AddClientComponent,canActivate:[AuthGuard]},
{path:'client/:id',component:ClientDetailsComponent,canActivate:[AuthGuard]},
{path:'edit-client/:id',component:EditClientComponent,canActivate:[AuthGuard]},
{path:'**',component:PageNotFoundComponent}
]

export const firebaseConfig = {
apiKey:"AIzaSyDXWWUNce7xH637d93xEHoeSIcEr-_7vRY",
authDomain:"lexiconclients.firebaseapp.com",
databaseURL:"https://lexiconclients.firebaseio.com",

storageBucket:"lexiconclients.appspot.com",
messagingSenderId:"945765661002"
}
@NgModule({
declarations: [
AppComponent,
AddClientComponent,
ClientDetailsComponent,
ClientsComponent,
DashboardComponent,
EditClientComponent,
NavbarComponent,
SidebarComponent,
LoginComponent,
RegisterComponent,
PageNotFoundComponent
  ],
imports: [
BrowserModule,RouterModule.forRoot(appRoutes),
AngularFireModule.initializeApp(firebaseConfig),
AngularFireDatabaseModule,
FormsModule,ReactiveFormsModule,
FlashMessagesModule.forRoot()
  ],
providers: [AngularFireAuth,
AngularFireDatabase,
ClientService,
AuthService,
AuthGuard,
  ],

bootstrap: [AppComponent]
})
export class AppModule { }
