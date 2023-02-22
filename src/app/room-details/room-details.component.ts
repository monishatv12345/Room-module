import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../room';
import { RoomOperationsService } from '../room-operations-service';
@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent {

  __roomService:RoomOperationsService; // creating object of Service layer
  router:Router;
  activeRoute:ActivatedRoute;
  r:Room = new Room(0,'','','','','');
    constructor(roomService:RoomOperationsService,router:Router,activeRoute:ActivatedRoute)
  {
    this.__roomService = roomService;
    this.router = router;
    this.activeRoute = activeRoute;

    let searchRoomNo= this.activeRoute.snapshot.params['rno']; // extract value from prameter(URI)
    console.log(searchRoomNo);
    this.r = this.__roomService.getRoomByHotel(parseInt(searchRoomNo)); // get data from service class
    console.log(this.r);

}
}
