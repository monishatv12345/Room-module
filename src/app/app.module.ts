import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { TDFRoomPageComponent } from './tdfroom-page/tdfroom-page.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { DiscriptionPipe } from './discription-pipe';

const allLinks:Routes = [
  {path:'launchroom',component:AdminWorkComponent},
  {path:'room',component:UserComponent},
  {path:'roomDetails/:rid',component:RoomDetailsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AdminWorkComponent,
    RoomDetailsComponent,
    TDFRoomPageComponent,
    DiscriptionPipe,
    UserComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(allLinks),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
