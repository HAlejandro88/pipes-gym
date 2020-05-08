import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'visualizar'
})
export class VisualizarPipe implements PipeTransform {

  transform(value: string, show: boolean = true): string {
    return (show) ? '*'.repeat(value.length) : value;
  }

}
