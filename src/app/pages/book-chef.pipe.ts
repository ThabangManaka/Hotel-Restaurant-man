import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookChef'
})
export class BookChefPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
