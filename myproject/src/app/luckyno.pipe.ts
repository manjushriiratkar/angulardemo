import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'luckyno'
})
export class LuckynoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
