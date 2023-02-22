import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { RoomOperationsService } from '../room-operations-service';
@Component({
  selector: 'app-tdfroom-page',
  templateUrl: './tdfroom-page.component.html',
  styleUrls: ['./tdfroom-page.component.css']
})
export class TDFRoomPageComponent implements OnInit {

  __roomService: RoomOperationsService; // creating object of Service layer
  r: Room = new Room(0, '', '', '', '', '');
  constructor(roomService: RoomOperationsService) {
    this.__roomService = roomService;
    console.log(this.r);
  }

  ngOnInit() {

  }
  submitingRoom() {

    this.__roomService.addRoom(this.r);
    console.log(this.r);

  }
}
