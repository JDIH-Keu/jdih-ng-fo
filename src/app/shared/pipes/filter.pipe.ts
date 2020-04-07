import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], args: { query: string, fields: string[] }): unknown {
    if (args.query.length === 0) { return value; }

    const finalList = value.filter(item => {
      const found = args.fields.map(field =>
        item[field].indexOf(args.query.toLowerCase()) > 0
      );

      return found.includes(true);
    });

    console.log(finalList);
    return finalList;
  }

}
