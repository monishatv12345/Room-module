import { Injectable } from '@angular/core';
import { Room } from './room';


@Injectable({
  providedIn: 'root'
})
export class RoomOperationsService {
    roomArr:Room[]=[];

  addRoom(roomFromUser:Room){
    this.roomArr.push(roomFromUser); 
    console.log("Inside Room Service : Room Added "+roomFromUser.roomNo);
    console.log(" Total Room Are :- "+this.roomArr.length);
  }

  getRoomArr():Room[]
  {
    return this.roomArr;
  }

  getRoomByHotel(searchRoomNo:number):Room
  {
    let outputRoom:Room = new Room(0,'','','','','');
    for(let i=0;i<this.roomArr.length;i++)
    {
      let thisRoom:Room = this.roomArr[i];
        if(thisRoom.roomNo == searchRoomNo)
        {
          outputRoom = thisRoom;
          break;
        }
    }
    
    return outputRoom;
  }


  getRoomByNo(filterCategory:string):Room[]
  {
    
   let outputArr:Room[] = [];

    this.roomArr.forEach(r=>{
      if(r.roomType == filterCategory)
      {
        outputArr.push(r);
      }
      if(r.ratePerDay==filterCategory){
        outputArr.push(r);
      }
    });

    return outputArr;
  }
  
  
}
