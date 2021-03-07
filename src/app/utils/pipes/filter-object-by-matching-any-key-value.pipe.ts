import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterObjectByMatchingAnyKeyValue'
})
export class FilterObjectByMatchingAnyKeyValuePipe implements PipeTransform {

  transform(obj: any, searchKeyword: string): any {

    if (!searchKeyword) {
      return obj;
    }
    const searchRegex = new RegExp(searchKeyword, 'gmi');

    obj = obj.filter((row: any) => {
      const fKeys = Object.keys(row).find(key => {
        if (row[key] && row[key].toString()) {
          const searchString = row[key].toString();
          return searchString.search(searchRegex) !== -1;
        }
        return false;
      });
      if (fKeys) {
        return true;
      }
      return false;
    });
    return obj;
  }

}
