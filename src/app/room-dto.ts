export class RoomDTO {
    roomNo:number;
    hotelName:string;
    roomType:string;
   ratePerDay:string;
   imageName:string;
   isAvailable:string;

   constructor(roomNo:number,hotelName:string,roomType:string,ratePerDay:string,isAvailable:string,imageName:string){

    this.roomNo=roomNo;
   this.hotelName=hotelName;
   this.roomType=roomType;
   this.ratePerDay=ratePerDay;
   this.imageName=imageName;
   this.isAvailable=isAvailable;
   }
}
