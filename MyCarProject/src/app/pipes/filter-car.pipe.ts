import { Pipe, PipeTransform } from '@angular/core';

import { CarDetail } from '../models/carDetail';

@Pipe({
  name: 'filterCar'
})
export class FilterCarPipe implements PipeTransform {

  transform(value: CarDetail[], filterText:string): CarDetail[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((ca:CarDetail)=> ca.carName.toLocaleLowerCase().indexOf(filterText)!==-1):value
  }
  

}
