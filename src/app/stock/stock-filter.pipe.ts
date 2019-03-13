import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  transform(list: any, field: string, keyword: string): any {
    if (!field || !keyword) {
      return list;
    }

    return list.filter(item => {
      let itemFileldValue = item[field].toLowerCase();
      return itemFileldValue.indexOf(keyword) >= 0;
    });
  }

}
