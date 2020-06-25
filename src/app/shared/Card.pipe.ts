
import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe ({
  name: 'Card'
})

export class Card implements PipeTransform {
  transform(value: number, multiply: string): string {
      return   value.toString().replace('http://vkarasenko.ru/wp-content/uploads/bank-karta-maket-400x282.png', 'Карта');

  }
}
