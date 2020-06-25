
import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe ({
  name: 'Wallet'
})

export class Wallet implements PipeTransform {
  transform(value: number, multiply: string): string {
    return   value.toString().replace('http://pngimg.com/uploads/wallet/wallet_PNG7511.png', 'Кошелек');
  }
}
