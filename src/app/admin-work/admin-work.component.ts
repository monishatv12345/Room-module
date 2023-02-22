import { Component } from '@angular/core';
import { Room } from '../room';
import { RoomOperationsService } from '../room-operations-service';
@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent {

  __roomService: RoomOperationsService;

  constructor(roomService: RoomOperationsService) {
    this.__roomService = roomService;
  }

  readRoom(roomNo: string,
    hotelName: string,
    roomType: string,
    ratePerDay: string,
    imageName: string,
    isAvailable: string,
    
    ) {
      console.log(roomNo+""+hotelName+""+roomType+""+ratePerDay+""+imageName+""+isAvailable);
      let roomFromUser:Room= new Room(parseInt(roomNo),hotelName,roomType,ratePerDay,imageName,isAvailable);
      this.__roomService.addRoom(roomFromUser);

  }
}
