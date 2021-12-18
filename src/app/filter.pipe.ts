import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(Data: any[], search: string): any {
    search = search.toLowerCase();
    if (Data && search) {
      return Data.filter(s => {
        if (s.name && s.name.official && s.name.official.toLowerCase().indexOf(search) > -1) {
          return true;
        }
        if (s.capital && s.capital[0].toLowerCase().indexOf(search) > -1) {
          return true;
        }
        return false;
      });
    }
    return Data;
  }
}




