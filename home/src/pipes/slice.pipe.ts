import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice',
  standalone: true
})
export class SlicePipe implements PipeTransform {
  transform(value: string, start: number, end?: number): string {
    if (!value || typeof value !== 'string') {
      return '';
    }
    return value.slice(start, end);
  }
}
