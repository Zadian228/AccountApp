//
// import {
//   Pipe,
//   PipeTransform
// } from '@angular/core';
// import {OperationService} from '../accounts/operation.service';
// import {Operations} from './interfaces';
//
// @Pipe ({
//   name: 'OperaionsIncome'
// })
//
// export class OperaionsIncome implements PipeTransform {
//   constructor(private operationsService: OperationService) {
//   }
//
//   transform(operations: Operations[], args: string): Operations[] {
//     for (const operation of operations) {
//       if (operation.expense > 0) {
//         return operations;
//       } else {
//         return null;
//       }
//     }
//
//   }
// }
