import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CategoryfilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'categoryfilter',
})
export class CategoryfilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */

/*
//this function also searches like the current one
transform(arr: any[], searchValue: string) {
    if (!searchValue) return arr;

    return arr.filter(value => {
      return value.categorykey.toLowerCase().includes(searchValue.toLowerCase());
    });
}
*/

transform(messages: Array<any>, condition: {[categorykey: string]: any}): Array<any>{
  if(!messages) {
    return null;
  }
  return messages.filter(message=>{
    for(let categorykey in condition){
      if(message[categorykey] == condition[categorykey] || condition[categorykey] == ''){
        return true;
      } else if(message[categorykey] !== condition[categorykey]){
        return false;
      }
    }
    return true;
  })
}

}
