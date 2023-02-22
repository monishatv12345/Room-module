import {PipeTransform,Pipe} from '@angular/core'

@Pipe({
    name:'mydiscript'
})

export class DiscriptionPipe implements PipeTransform {
    
    transform(value: any,length:number):string {
      return value.length > length ? `${value.substring(0, length)} ...` : value
        
    }
}
